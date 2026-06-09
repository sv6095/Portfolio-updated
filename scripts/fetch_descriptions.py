import json
f=open('C:\\Users\\shant\\.gemini\\antigravity\\brain\\2b54e4cd-1d36-4712-b4c1-9acf3badcf65\\.system_generated\\steps\\389\\content.md', 'r', encoding='utf-8')
content=f.read()
idx=content.find('\n\n---\n\n')
data=json.loads(content[idx+7:])
target_repos = ['Household-Services-application', 'Ocr-autofill-Forms', 'Quiz-Master', 'StreamGuard', 'Trading-bot', 'Unlabel']
for r in data:
    if r['name'] in target_repos:
        print(f"{r['name']} | {r['description']} | {r['language']}")
