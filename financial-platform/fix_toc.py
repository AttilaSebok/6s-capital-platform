import re

files = [
    'app/articles/buy-and-hold-forever/page.tsx',
    'app/articles/growth-vs-value-investing/page.tsx',
    'app/articles/income-investing-strategy/page.tsx',
    'app/articles/momentum-investing/page.tsx',
    'app/articles/sector-rotation-strategy/page.tsx',
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace items={ with headings={
    content = content.replace('items={[', 'headings={[')

    # Replace { id: '...', label: '...' } with { id: '...', text: '...', level: 2 }
    # Pattern: { id: 'something', label: 'something' }
    pattern = r"\{ id: '([^']+)', label: '([^']+)' \}"
    replacement = r"{ id: '\1', text: '\2', level: 2 }"
    content = re.sub(pattern, replacement, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed: {filepath}")

print("\nAll files fixed!")
