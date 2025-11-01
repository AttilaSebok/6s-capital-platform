#!/usr/bin/env python3
import re
import os

articles_dir = r"d:\___________________________________Cursor\6s Capital\financial-platform\app\articles"

article_slugs = [
    "how-to-read-financial-statements",
    "etfs-vs-mutual-funds",
    "retirement-accounts-guide",
    "stock-valuation-methods",
    "market-cycles-economic-indicators",
    "options-trading-101",
    "real-estate-vs-stocks",
    "tax-loss-harvesting",
    "how-to-analyze-earnings-reports",
    "emerging-markets-guide"
]

for slug in article_slugs:
    file_path = os.path.join(articles_dir, slug, "page.tsx")

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove const tableOfContents array (multi-line)
    content = re.sub(
        r'\s*const tableOfContents = \[[\s\S]*?\]',
        '',
        content,
        flags=re.MULTILINE
    )

    # Remove <TableOfContents items={tableOfContents} />
    content = re.sub(
        r'\s*<TableOfContents items=\{tableOfContents\} />',
        '',
        content
    )

    # Clean up extra blank lines (max 2 consecutive)
    content = re.sub(r'\n\n\n+', '\n\n', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed: {slug}")

print("\nAll articles fixed!")
