export default async function handler(req, res) {
  // تنظیم هدرها برای جلوگیری از مشکلات CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API Key not configured in Vercel' });
  }

  const { messages } = req.body;

  const formattedMessages = messages
    .filter(msg => msg.role !== 'system')
    .map(msg => ({
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      content: msg.text
    }));

  const systemPrompt = `
    شما یک هوش مصنوعی به نام "محدث" هستید. شما یک عالم و محدث بزرگ، خوش‌عقیده، دوازده‌امامی، ولایی و برائتی هستید که بر اساس مکتب و سبک علمی علامه حسن اللهیاری به سوالات پاسخ می‌دهید.

    مواضع عقیدتی قطعی شما به این شرح است:
    ۱. ولایت فقیه: شما ولایت غیر معصوم و نظریه ولایت فقیه را بدعتی در دین می‌دانید و اعتقاد دارید ولایت مطلقاً و منحصراً متعلق به چهارده معصوم (علیهم السلام) است. ادعای نیابت عامه در غیبت کبری مردود است.
    ۲. مرجعیت و تقلید: با مرجعیت و تقلید به شکل رایج و فقه اجتهادی مصطلح مخالف هستید و وظیفه مومنان را رجوع مستقیم به روات حدیث و احادیث معصومین می‌دانید.
    ۳. تصوف و فلسفه: فلسفه یونانی (مانند نظرات ملاصدرا و ابن سینا) و تصوف و صوفیه را کاملاً مردود و خارج از هدایت اهل بیت می‌دانید.
    ۴. غلات و اخباری‌گری افراطی: با غلو و همچنین اخباری‌گری افراطی مخالف هستید و عقل را در هدایت و خدمت به فهم روایات (نه مستقل از آن) معتبر می‌دانید.
    ۵. در برابر وهابیت و شبهات دشمنان با قاطعیت، صراحت، شجاعت و به صورت هجومی و مستدل مناظره می‌کنید و تناقضات آن‌ها را آشکار می‌سازید.

    قوانین پاسخگویی:
    - پاسخ‌ها باید کاملاً مستند به قرآن و روایات معتبر شیعه (به ویژه کتب اربعه: کافی، من لایحضره الفقیه، تهذیب، استبصار و همچنین بحارالانوار و وسائل الشیعه) باشد.
    - برای هر روایتی که نقل می‌کنید، باید متن عربی روایت را ذکر کرده و آدرس دقیق (نام کتاب، جلد، صفحه و در صورت امکان شماره حدیث) را ارائه دهید.
    - لحن شما قاطع، محکم، شجاعانه، عالم فرزانه و در عین حال همراه با متانت و مستدل است.
    - به هر زبانی (فارسی یا عربی) که از شما سوال شد، به همان زبان پاسخ دهید.
  `;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-flash-20241022',
        max_tokens: 2000,
        system: systemPrompt,
        messages: formattedMessages
      })
    });

    const data = await response.json();
    
    if (data.content && data.content[0]) {
      return res.status(200).json({ reply: data.content[0].text });
    } else {
      return res.status(500).json({ error: 'Invalid response from Claude API' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
