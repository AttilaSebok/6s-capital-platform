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

    # Find and replace KeyTakeaway patterns
    # Pattern: <KeyTakeaway title="..." headings={['...', '...', ...]} />
    # Replace with: <KeyTakeaway><ul><li>...</li><li>...</li></ul></KeyTakeaway>

    # This is complex, so let's use a more targeted approach
    # Find the KeyTakeaway block and extract the items
    pattern = r'<KeyTakeaway\s+title="([^"]+)"\s+headings=\{\[(.*?)\]\}\s*/>'

    def replace_keytakeaway(match):
        title = match.group(1)
        items_str = match.group(2)

        # Extract individual items (strings between quotes)
        items = re.findall(r"'([^']+)'", items_str)

        # Build the new structure
        result = f'<KeyTakeaway>\n'
        result += f'        <ul className="space-y-2 list-disc list-inside">\n'
        for item in items:
            # Escape any existing quotes in items
            item_escaped = item.replace("'", "\\'")
            result += f'          <li>{item_escaped}</li>\n'
        result += f'        </ul>\n'
        result += f'      </KeyTakeaway>'

        return result

    content = re.sub(pattern, replace_keytakeaway, content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed: {filepath}")

print("\nAll KeyTakeaway components fixed!")
