import os
import re

# List of article files to fix
articles = [
    r'financial-platform\app\articles\rsi-indicator-guide\page.tsx',
    r'financial-platform\app\articles\moving-averages-guide\page.tsx',
    r'financial-platform\app\articles\support-resistance-levels\page.tsx',
    r'financial-platform\app\articles\macd-indicator-guide\page.tsx',
]

def fix_special_chars(content):
    """Replace special characters with proper React/JSX equivalents"""
    # Fix smart quotes
    content = content.replace('"', '"')
    content = content.replace('"', '"')
    content = content.replace(''', "'")
    content = content.replace(''', "'")

    # Fix em dashes and en dashes
    content = content.replace('—', '&mdash;')
    content = content.replace('–', '&ndash;')

    # Fix special arrows and symbols
    content = content.replace('→', '&rarr;')
    content = content.replace('←', '&larr;')
    content = content.replace('↑', '&uarr;')
    content = content.replace('↓', '&darr;')

    # Fix apostrophes in contractions (don't, can't, etc.)
    # Replace straight apostrophe in contractions with &apos;
    content = re.sub(r"don't", "don&apos;t", content)
    content = re.sub(r"doesn't", "doesn&apos;t", content)
    content = re.sub(r"can't", "can&apos;t", content)
    content = re.sub(r"won't", "won&apos;t", content)
    content = re.sub(r"isn't", "isn&apos;t", content)
    content = re.sub(r"aren't", "aren&apos;t", content)
    content = re.sub(r"wasn't", "wasn&apos;t", content)
    content = re.sub(r"weren't", "weren&apos;t", content)
    content = re.sub(r"haven't", "haven&apos;t", content)
    content = re.sub(r"hasn't", "hasn&apos;t", content)
    content = re.sub(r"hadn't", "hadn&apos;t", content)
    content = re.sub(r"wouldn't", "wouldn&apos;t", content)
    content = re.sub(r"shouldn't", "shouldn&apos;t", content)
    content = re.sub(r"couldn't", "couldn&apos;t", content)
    content = re.sub(r"that's", "that&apos;s", content)
    content = re.sub(r"it's", "it&apos;s", content)
    content = re.sub(r"you're", "you&apos;re", content)
    content = re.sub(r"they're", "they&apos;re", content)
    content = re.sub(r"we're", "we&apos;re", content)
    content = re.sub(r"I'm", "I&apos;m", content)

    # Fix problematic backticks used as negation symbols
    content = content.replace('` Sell Signal', '≠ Sell Signal')
    content = content.replace('` Buy Signal', '≠ Buy Signal')
    content = content.replace('L Buying', '❌ Buying')
    content = content.replace('L Selling', '❌ Selling')
    content = content.replace('L Using', '❌ Using')
    content = content.replace('L Ignoring', '❌ Ignoring')

    return content

for article_path in articles:
    full_path = os.path.join(r'D:\___________________________________Cursor\6s Capital', article_path)

    if not os.path.exists(full_path):
        print(f"Skipping {article_path} (not found)")
        continue

    print(f"Processing {article_path}...")

    # Read file with error handling for encoding
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        # Try with latin-1 encoding if UTF-8 fails
        with open(full_path, 'r', encoding='latin-1') as f:
            content = f.read()

    # Fix special characters
    fixed_content = fix_special_chars(content)

    # Write back
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(fixed_content)

    print(f"  Fixed {article_path}")

print("\nAll articles fixed!")
