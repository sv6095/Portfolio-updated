import os
import glob
import re

directory = r"c:\projects\portfolio\src\components\sections"
files = glob.glob(os.path.join(directory, "*.tsx"))

replacements = {
    r"text-white": r"text-[var(--foreground)]",
    r"text-\[\#c2c6d6\]": r"text-[var(--muted)]",
    r"text-\[\#adc6ff\]": r"text-[var(--primary-text)]",
    r"bg-\[\#0a0a0a\]": r"bg-[var(--background)]",
    r"bg-\[\#424754\]": r"bg-[var(--muted)]",
    r"text-\[\#8c909f\]": r"text-[var(--muted)]",
    r"text-\[\#424754\]": r"text-[var(--muted)]",
    r"border-\[\#0a0a0a\]": r"border-[var(--background)]",
    r"border-white/10": r"border-[var(--glass-border)]",
    r"border-white/5": r"border-[var(--glass-border)]",
}

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for pattern, replacement in replacements.items():
        # Only replace exact class substrings, though these are specific enough
        new_content = re.sub(pattern, replacement, new_content)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(filepath)}")
