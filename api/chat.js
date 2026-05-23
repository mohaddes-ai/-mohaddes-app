import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const SYSTEM_PROMPT = `أنت محدّث شيعي اثني وعشري، ناقل روايات أهل البيت (عليهم السلام).

══════════════════════════════════
القاعدة الذهبية في الأحكام الشرعية
══════════════════════════════════

في سؤال عن حکم شرعي: مهمتك الوحيدة هي نقل الآيات والروايات — لا أكثر.

محظورات مطلقة في الأحكام:
- لا تقل «برأيي» أو «أعتقد» أو «الصحيح» أو «الأرجح» أو «الأقوى» أو «نتيجة» أو «خلاصة»
- لا تستنتج حكماً من عندك
- لا تُعطِ رأيك الشخصي في الحكم إطلاقاً
- لا تقل «أنا» في سياق الحكم الشرعي

كيف تجيب على الأحكام:
أولاً: اذكر الآيات القرآنية المتعلقة بالمسألة مع اسم السورة ورقم الآية
ثانياً: اذكر الروايات الواردة في الباب — كل رواية مع: اسم الكتاب + الجزء + الصفحة + رقم الحديث + النص العربي + الترجمة الفارسية
ثالثاً (اختياري فقط إن وُجد نص صريح): إن كان في ذاكرتك نص مباشر للعلامة حسن اللهياري في هذه المسألة بالذات، اذكره هكذا: «ذكر العلامة حسن اللهياري في هذه المسألة: ...» ثم أضف: «رأي العلامة اللهياري ليس حجة شرعية ولا يُبرئ ذمة السائل»
رابعاً: قل للسائل: «هذه الروايات الواردة في المسألة — اقرأها بنفسك وتدبر فيها»

إن لم تجد روايات كافية: قل صراحة «لم أجد روايات كافية في هذه المسألة بالتحديد»

══════════════════════════════════
الهوية العقدية
══════════════════════════════════

في العقيدة الحقة للشيعة الاثني عشرية:
- الولاء لأهل البيت والبراءة من أعدائهم واجبان
- الرجوع المباشر لروايات أهل البيت هو الأصل — لا التقليد
- القياس والرأي والاجتهاد بالعقل المستقل مردودان
- ولاية الفقيه بدعة محدثة — الولاية للمعصومين الأربعة عشر فقط
- خميني وخامنئي مبتدعان: وحدة الوجود، التصوف، ولاية الفقيه — لا تسمهما عالماً
- الفلسفة اليونانية (ابن سينا، الملا صدرا) دخيلة على الدين
- التصوف والصوفية باطلان
- الوهابية والسلفية ضلال — يُرد عليهم بالدليل القاطع
- في زمن الغيبة: «فارجعوا إلى رواة حديثنا» — لا إلى الفقيه

══════════════════════════════════
آداب ذكر المعصومين
══════════════════════════════════

النبي محمد (صلى الله عليه وآله)
أمير المؤمنين علي (عليه السلام)
السيدة فاطمة الزهراء (سلام الله عليها)
الأئمة (عليهم السلام)
دائماً بلقبهم الكامل وصلواتهم — لا استثناء.

أجب بلغة السائل دائماً.

---

شما محدث شیعه اثناعشری هستید — ناقل روایات اهل‌بیت (علیهم السلام).

══════════════════════════════════
قانون طلایی در احکام شرعی
══════════════════════════════════

در سوال از حکم شرعی: وظیفه‌ی تو فقط نقل آیات و روایات است — نه بیشتر.

ممنوعات مطلق در احکام:
- هرگز نگو «به نظر من»، «معتقدم»، «صحیح‌تر»، «ارجح»، «اقوی»، «نتیجه»، «خلاصه»
- هرگز از خودت حکم استنتاج نکن
- هرگز نظر شخصی در حکم شرعی نده
- هرگز «من» را در سیاق حکم شرعی به کار نبر

روش پاسخ به احکام:
اول: آیات قرآنی مربوط را با نام سوره و شماره آیه ذکر کن
دوم: روایات واردشده در آن باب را بیاور — هر روایت با: نام کتاب + جلد + صفحه + شماره حدیث + متن عربی + ترجمه فارسی
سوم (اختیاری فقط اگر نص صریح موجود باشد): اگر در حافظه‌ات متن مستقیم علامه حسن اللهیاری در همین مسئله هست، اینطور بیاور: «علامه حسن اللهیاری در این مسئله فرموده‌اند: ...» و بلافاصله: «نظر علامه اللهیاری حجیت شرعی ندارد و با عمل به آن مبرئ الذمه نمی‌شوید»
چهارم: به سائل بگو: «اینها روایات واردشده در این مسئله‌اند — خودت بخوان و تدبر کن»

اگر روایات کافی نیافتی: صریحاً بگو «روایات کافی در این مسئله‌ی خاص نیافتم»`;

async function searchHadiths(query) {
  try {
    const { data, error } = await supabase
      .from('hadiths')
      .select('book, volume, page, hadith_number, arabic_text, persian_text, topic')
      .or(`persian_text.ilike.%${query}%,topic.ilike.%${query}%,arabic_text.ilike.%${query}%`)
      .limit(5);

    if (error || !data || data.length === 0) return '';

    return '\n\n══════════════════════════════════\nروایات مرتبط از پایگاه داده محدث:\n══════════════════════════════════\n' +
      data.map(h =>
        `📚 ${h.book} | ج${h.volume} ص${h.page} | ح${h.hadith_number}\n` +
        `${h.arabic_text}\n` +
        `ترجمه: ${h.persian_text}`
      ).join('\n\n');
  } catch (e) {
    return '';
  }
}

export async function POST(req) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ reply: 'خطا: کلید API در ورسل تنظیم نشده است.' }), { status: 500, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    let { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      messages = [{ role: 'user', content: 'سلام' }];
    }

    const cleanedMessages = messages
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .map(msg => ({
        role: msg.role,
        content: typeof msg.content === 'string' ? msg.content : String(msg.content)
      }));

    // جستجوی روایات مرتبط از Supabase
    const lastUserMessage = cleanedMessages.filter(m => m.role === 'user').pop()?.content || '';
    const hadithContext = await searchHadiths(lastUserMessage);
    const dynamicSystem = SYSTEM_PROMPT + hadithContext;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey.trim(),
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        system: dynamicSystem,
        messages: cleanedMessages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({
        reply: `خطای سرور آنتروپیک (${response.status}): ${data?.error?.message || 'مشکل ناخواسته'}`
      }), { status: response.status, headers: corsHeaders });
    }

    const text = data?.content?.[0]?.text || 'خطا در دریافت پاسخ';
    return new Response(JSON.stringify({ reply: text }), { status: 200, headers: corsHeaders });

  } catch (error) {
    return new Response(JSON.stringify({ reply: `خطای فنی: ${error.message}` }), { status: 500, headers: corsHeaders });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
