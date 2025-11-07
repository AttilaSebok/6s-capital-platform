import re
import os

# List of files to fix
files = [
    'app/articles/buy-and-hold-forever/page.tsx',
    'app/articles/income-investing-strategy/page.tsx',
    'app/articles/momentum-investing/page.tsx',
    'app/articles/sector-rotation-strategy/page.tsx'
]

for filepath in files:
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} - file not found")
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove the TableOfContents import
    content = re.sub(r"import TableOfContents from '@/components/TableOfContents'\n", '', content)

    # Remove the TableOfContents component usage (including all its props)
    # Pattern matches <TableOfContents ... /> including multi-line
    content = re.sub(
        r'<TableOfContents\s+headings=\{\[[^\]]+\]\}\s*/>\s*\n\s*\n',
        '',
        content,
        flags=re.DOTALL
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed {filepath}")

print("Done!")
