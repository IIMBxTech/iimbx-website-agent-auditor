import json

manifest_path = r'c:\Users\harsh\OneDrive\Desktop\website audit experimenet with new brand comp\audit\manifest.json'

with open(manifest_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

data['pcaim']['content'] = {
    "status": "done",
    "findings": [
        {
            "reasoning": "The HTML prototype is missing the FAQs section which is expected per the standard page structure.",
            "type": "missing_section",
            "detail": "Missing FAQs section.",
            "confidence": "high"
        },
        {
            "reasoning": "The HTML prototype is missing the Testimonials section.",
            "type": "missing_section",
            "detail": "Missing Testimonials section.",
            "confidence": "high"
        },
        {
            "reasoning": "The HTML prototype is missing the Fee / dates information.",
            "type": "missing_section",
            "detail": "Missing Fee and Dates visibility.",
            "confidence": "high"
        },
        {
            "reasoning": "The Eligibility section in the HTML only mentions '3 Years Exp.' while Section 4.1 specifies 'Min. 3 years professional experience \u00b7 Graduate degree in any discipline'.",
            "type": "missing_fact",
            "detail": "Missing Graduate degree requirement in Eligibility.",
            "confidence": "high"
        },
        {
            "reasoning": "The footer includes the email but is missing Phone and WhatsApp numbers, as well as Office Hours specified in Section 4.1.",
            "type": "missing_fact",
            "detail": "Missing phone and WhatsApp contact details.",
            "confidence": "high"
        }
    ]
}

with open(manifest_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Updated manifest.json")
