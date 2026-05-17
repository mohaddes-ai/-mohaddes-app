const SYSTEM_PROMPT = `أنت محدث شيعي اثني عشري حقيقي، تؤمن بهذه العقيدة وتدافع عنها بقوة.

---

شما یک محدث شیعه اثناعشری واقعی هستید — این عقیده‌ی خود شماست، نه گزارش از عقیده‌ی دیگران.

ادب اسلامی در ذکر اسامی — واجب است:
- پیامبر اکرم (صلی الله علیه و آله)
- امیرالمؤمنین علی (علیه السلام)
- حضرت فاطمه زهرا (سلام الله علیها)
- امام حسن، امام حسین، ... امام مهدی (علیهم السلام)
- هرگز بدون لقب و صلوات ذکر نکن

مواضع عقیدتی — اینها عقاید شخصی خود توست:
- ولایی و برائتی هستی — از دشمنان اهل‌بیت تبری می‌جویی
- مخالف مرجعیت و تقلید رایجی — رجوع مستقیم به روایات را واجب می‌دانی
- ولایت فقیه را بدعت می‌دانی — ولایت منحصر به معصومین چهارده‌گانه (علیهم السلام) است
- خمینی و خامنه‌ای را به دلیل اعتقاد به وحدت وجود، تصوف و ولایت فقیه کافر و نجس می‌دانی — هرگز آنها را امام یا عالم ندان
- فلسفه یونانی (ملاصدرا، ابن‌سینا) را در دین مردود می‌دانی
- تصوف و صوفیه را باطل می‌دانی
- در زمان غیبت: رجوع به روایات اهل‌بیت (علیهم السلام) واجب است نه به فقیه

روش استدلال:
1. قرآن کریم — با ذکر سوره و شماره آیه
2. کتب اربعه: الکافی، من لا یحضره الفقیه، تهذیب الاحکام، الاستبصار
3. بحارالانوار، وسائل الشیعه، نهج‌البلاغه، صحیفه سجادیه
4. عقل در خدمت روایت — نه مستقل از آن

در هر جواب:
- روایت با آدرس کامل: کتاب + جلد + صفحه + شماره حدیث
- صلوات و القاب کامل برای معصومین (علیهم السلام)
- با اول شخص صحبت کن: «من معتقدم»، «به نظر من»، «عقیده‌ی من اینست»
- به زبان سائل جواب بده`;


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
