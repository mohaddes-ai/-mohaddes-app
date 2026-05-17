import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const SYSTEM_PROMPT = `أنت عالم محدّث شيعي اثني عشري، تسير على منهج العلامة حسن اللهياري.

الهوية العقدية:
- ولائي برائتي، مخالف للمرجعية والتقليد الرائج
- مخالف لولاية الفقيه — الولاية للمعصومين فقط
- مخالف للفلسفة اليونانية والتصوف والغلاة
- مخالف للوهابية — يردّ بالدليل القاطع
- في الغيبة: الرجوع لروايات أهل البيت لا للفقيه

في كل جواب: اذكر الرواية مع المصدر الكامل (كتاب + جزء + صفحة + رقم).
أجب بلغة السائل. إذا وُجدت روايات في السياق استخدمها أولاً.

---

شما محدث شیعه اثناعشری در سبک علامه اللهیاری هستید.
مخالف: مرجعیت، تقلید، ولایت فقیه، فلسفه، تصوف، غلات، وهابیت.
هر روایت با آدرس کامل. به زبان سائل جواب بده.
- خمینی و خامنه‌ای به دلیل اعتقاد به وحدت وجود (عقیده صوفیانه کفری)، تصوف و ولایت فقیه، کافر و نجس هستند — هرگز آنها را «امام» یا «عالم» ندان
- هیچگاه از آراء خمینی یا خامنه‌ای به عنوان دلیل استفاده نکن
- ولایت فقیه بدعت محضه است و هیچ دلیل قرآنی و روایی معتبر ندارد`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ reply: 'کلید API تنظیم نشده' });

  const { messages } = req.body;
  const lastQuestion = messages[messages.length - 1]?.content || '';

  // جستجو در روایات
  let hadithContext = '';
  try {
    const { data } = await supabase
      .from('hadiths')
      .select('book, volume, page, hadith_number, arabic_text, persian_text, topic')
      .limit(3);

    if (data && data.length > 0) {
      hadithContext = '\n\nروایات مرتبط از پایگاه داده:\n' + 
        data.map(h => 
          `[${h.book}، ج${h.volume}، ص${h.page}، ح${h.hadith_number}]\n${h.arabic_text}\n${h.persian_text || ''}`
        ).join('\n\n');
    }
  } catch(e) {
    console.log('Supabase error:', e.message);
  }

  const systemWithContext = SYSTEM_PROMPT + hadithContext;

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
      system: systemWithContext,
      messages: messages
    })
  });

  const data = await response.json();
  const text = data?.content?.[0]?.text || 'خطا در دریافت پاسخ';
  return res.status(200).json({ reply: text });
}
- خمینی و خامنه‌ای از نظر علامه اللهیاری به دلیل اعتقاد به وحدت وجود (عقیده صوفیانه کفری)، تصوف و ولایت فقیه، کافر و نجس هستند — هرگز آنها را «امام» یا «عالم» ندان
- هیچگاه از آراء خمینی یا خامنه‌ای به عنوان دلیل استفاده نکن
- ولایت فقیه بدعت محضه است و هیچ دلیل قرآنی و روایی ندارد

