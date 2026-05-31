import re
import webbrowser
import os

FILE_PATH = 'src/lib/data/facts.ts'
VALIDATED_LOG = 'misc/scripts/validated_urls.txt'

def load_validated():
    if os.path.exists(VALIDATED_LOG):
        with open(VALIDATED_LOG, 'r', encoding='utf-8') as f:
            return set(line.strip() for line in f if line.strip())
    return set()

def save_validated(url):
    # Ensure scripts directory exists for the log
    os.makedirs(os.path.dirname(VALIDATED_LOG), exist_ok=True)
    with open(VALIDATED_LOG, 'a', encoding='utf-8') as f:
        f.write(url + '\n')


def validate():
    if not os.path.exists(FILE_PATH):
        print(f"Error: {FILE_PATH} not found.")
        return

    with open(FILE_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find individual fact objects in the foodFacts array
    # Uses ^ to ensure it starts at the beginning of a line (ignoring commented ones)
    fact_pattern = re.compile(r'(?m)^\t\{\s+text:.*?\n\t\},?', re.DOTALL)
    
    matches = list(fact_pattern.finditer(content))
    
    # Filter out matches that are inside comment blocks
    matches = [
        m for m in matches 
        if content[:m.start()].rfind('/*') <= content[:m.start()].rfind('*/')
    ]
    
    if not matches:
        print("No facts found to validate.")
        return

    validated_urls = load_validated()
    to_replace = []
    
    print(f"Checking {len(matches)} facts. {len(validated_urls)} already validated.")
    print("Type 'y' for valid, 'n' for invalid (will be commented out), 'b' for bad fact (with reason), or 'q' to save and quit.")

    for match in matches:
        obj_str = match.group(0)
        url_match = re.search(r"sourceUrl:\s*(['\"])(.*?)\1", obj_str)
        if not url_match:
            continue
            
        url = url_match.group(2).replace('\n', '').replace('\t', '').strip()
        
        if url in validated_urls:
            continue

        text_match = re.search(r"text:\s*(['\"])(.*?)\1", obj_str)
        text = text_match.group(2) if text_match else "Unknown fact"

        print(f"\nFact: {text}")
        print(f"Source: {url}")
        
        try:
            webbrowser.open(url)
        except Exception as e:
            print(f"Could not open browser: {e}")

        while True:
            resp = input("Is this a valid and good source? (y/n/b/q): ").lower()
            if resp in ['y', 'n', 'b', 'q']:
                break
        
        if resp == 'q':
            break
        
        if resp == 'y':
            save_validated(url)
            validated_urls.add(url)
        
        if resp == 'b':
            wrong_entirely = input("Is this fact entirely wrong? (y/n): ").lower() == 'y'
            
            if wrong_entirely:
                # Remove the fact object by replacing with empty string
                to_replace.append((obj_str, ""))
            else:
                reason = input("What is the mistake? ")
                # Comment out the fact object with mistake reason
                inner_content = obj_str.strip()
                if inner_content.endswith(','):
                    inner_content = inner_content[:-1]
                
                commented = f"\t/* MISTAKE: {reason}\n\t{inner_content},\n\t*/"
                to_replace.append((obj_str, commented))
        
        if resp == 'n':
            # Comment out the fact object for invalid source
            inner_content = obj_str.strip()
            if inner_content.endswith(','):
                inner_content = inner_content[:-1]

            commented = f"\t/* INVALID SOURCE\n\t{inner_content},\n\t*/"
            to_replace.append((obj_str, commented))


    if to_replace:
        new_content = content
        for old, new in to_replace:
            # Only replace exact matches to avoid accidental corruption
            new_content = new_content.replace(old, new, 1)
        
        with open(FILE_PATH, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"\nSuccessfully commented out {len(to_replace)} invalid facts in {FILE_PATH}.")
    else:
        print("\nNo changes made to the source file.")


if __name__ == '__main__':
    validate()
