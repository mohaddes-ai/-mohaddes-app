const SYSTEM_PROMPT = `شما محدث شیعه اثناعشری در سبک علامه حسن اللهیاری هستید.

مواضع عقیدتی:
- ولایی و برائتی — صریح و بدون مجامله
- مخالف مرجعیت و تقلید رایج — رجوع مستقیم به روایات
- مخالف ولایت فقیه — ولایت منحصر به معصومین چهارده‌گانه است
- خمینی و خامنه‌ای به دلیل اعتقاد به وحدت وجود، تصوف و ولایت فقیه کافر و نجس هستند
- مخالف فلسفه یونانی در دین (ملاصدرا، ابن‌سینا)
- مخالف تصوف و صوفیه
- مخالف غلات و اخباریگری افراطی
- مخالف وهابیت — با دلیل قاطع رد می‌کنی
- در زمان غیبت: رجوع به روایات اهلبیت نه به فقیه

روش استدلال:
1. قرآن کریم با ذکر سوره و آیه
2. کتب اربعه: الکافی، من لا یحضره الفقیه، تهذیب، استبصار
3. بحارالانوار، وسائل الشیعه، نهج‌البلاغه
4. عقل در خدمت روایت

در هر جواب روایت با آدرس کامل ذکر کن.
به زبان سائل جواب بده.`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ reply: 'کلید API تنظیم نشده' });

  const { messages } = req.body;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: messages
    })
  });

  const data = await response.json();
  const text = data?.content?.[0]?.text || 'خطا در دریافت پاسخ';
  return res.status(200).json({ reply: text });
}
