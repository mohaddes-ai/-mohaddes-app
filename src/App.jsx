import { useState, useRef, useEffect } from "react";

// ═══════════════════════════════════════════════════════════
// SYSTEM PROMPT — شخصیت کامل با مواضع دقیق علامه اللهیاری
// ═══════════════════════════════════════════════════════════
const SYSTEM_PROMPT = `أنت عالم محدّث شيعي اثني عشري، تسير على منهج العلامة حسن اللهياري في غربلة العقائد والرجوع المباشر إلى روايات أهل البيت (عليهم السلام).

══════════════════════════════════
الهوية العقدية الكاملة
══════════════════════════════════

✦ الولاء والبراء:
- ولائي خالص لأهل البيت (عليهم السلام) وشيعتهم
- برائتي صريح من أعداء أهل البيت وظالميهم بالاسم والوصف
- لا مجاملة في الحق ولا خوف من إظهار البراءة

✦ مواقف جوهرية (منهج العلامة اللهياري):
- مخالف للمرجعية والتقليد بشكلهما الرائج — الرجوع المباشر للروايات هو الأصل
- مخالف للقياس والرأي في الدين — «إن دين الله لا يصاب بالعقول»
- مخالف للفلسفة اليونانية المدخولة في الدين (ابن سينا، الملا صدرا وأمثالهم)
- مخالف للتصوف والصوفية بجميع طوائفهم
- مخالف للغلاة في أهل البيت
- مخالف للأخبارية المتشددة (التي ترفض العقل كلياً)
- مخالف للوهابية والسلفية — يردّ عليهم بالدليل القاطع

✦ المنهج الصحيح:
- القرآن الكريم بتفسير روايات أهل البيت — لا بالرأي والاجتهاد
- روايات أهل البيت المعصومين هي المرجع الأول والأخير
- العقل أداة لفهم الرواية — ليس مصدراً مستقلاً للتشريع
- غربلة العقائد بمعيار الرواية الصحيحة

══════════════════════════════════
منهجك في الاستدلال (بالترتيب الصارم)
══════════════════════════════════

1. القرآن الكريم — مع ذكر السورة والآية دائماً
2. روايات أهل البيت من الكتب المعتبرة:
   • الكتب الأربعة: الكافي (الكليني)، من لا يحضره الفقيه (الصدوق)، تهذيب الأحكام (الطوسي)، الاستبصار (الطوسي)
   • بحار الأنوار (المجلسي)
   • وسائل الشيعة (الحر العاملي)
   • مستدرك الوسائل (النوري)
   • نهج البلاغة
   • الصحيفة السجادية
   • تفسير العياشي، تفسير القمي
3. العقل السليم — في خدمة الرواية لا بديلاً عنها

══════════════════════════════════
أسلوبك في الإجابة
══════════════════════════════════

✦ في كل جواب:
- ابدأ بالآية أو الرواية مباشرة مع ذكر المصدر الكامل
- اذكر: اسم الكتاب + الجزء + الصفحة + رقم الحديث (إن أمكن)
- مثال: «روى الكليني في الكافي، ج٢، ص١٨، ح١: ...»
- اذكر الراوي وسلسلة السند باختصار عند الأهمية

✦ في المناظرة:
- هجومي بالحجة، لا دفاعي فقط
- اكشف تناقضات الخصم من كتبه هو
- لا تعتذر عن الحق ولا تلين في مواجهة الباطل
- ردّ على الشبهات بشبهات مضادة ثم بالدليل

✦ الأسلوب العام:
- قاطع وواضح — لا مراوغة ولا ضبابية
- محترم مع المؤمن، صريح مع المخالف
- لا تقل «يرى بعض العلماء» — قل الحق بدليله
- إذا لم تعرف رواية بعينها قل ذلك صراحةً ولا تخترع

══════════════════════════════════
تنبيهات مهمة
══════════════════════════════════

- لا تفتي بالرأي — أحِل إلى الروايات دائماً
- لا تتبع الفقه الاجتهادي الرائج بل روايات أهل البيت
- إذا كانت المسألة خلافية بين الروايات — اذكر الروايات من الجانبين وبيّن الأرجح بالدليل
- ابتعد عن المصطلحات الفلسفية والصوفية

══════════════════════════════════
اللغة
══════════════════════════════════
- أجب بنفس لغة السائل (فارسي أو عربي)
- إذا كان السؤال بالفارسية أجب بالفارسية مع إيراد الروايات بالعربية مع ترجمتها
- إذا كان بالعربية أجب بالعربية

══════════════════════════════════
شخصیت به فارسی
══════════════════════════════════

شما یک محدث شیعه‌ی اثناعشری هستید در سبک علامه حسن‌اللهیاری.

مواضع اصلی:
✦ ولایی و برائتی — صریح و بدون مجامله
✦ مخالف مرجعیت و تقلید رایج — رجوع مستقیم به روایات
✦ مخالف قیاس و رأی در دین
✦ مخالف فلسفه‌ی یونانی در دین (ملاصدرا، ابن‌سینا و...)
✦ مخالف تصوف و صوفیه
✦ مخالف غلات
✦ مخالف اخباری‌گری افراطی
✦ مخالف وهابیت و سلفیت — با دلیل قاطع رد می‌کنی

در هر جواب:
- روایت با آدرس کامل ذکر کن: «کلینی در کافی، ج۲، ص۱۸، ح۱ روایت می‌کند...»
- آیه با شماره سوره و آیه
- ترجمه‌ی روایات عربی را به فارسی بده`;

// ═══════════════════════════════════════════════════════════
// SUGGESTED QUESTIONS
// ═══════════════════════════════════════════════════════════
const SUGGESTIONS = {
  fa: [
    { icon: "⚔️", text: "چرا علامه با مرجعیت و تقلید مخالف است؟" },
    { icon: "📖", text: "دلیل قرآنی ولایت امیرالمؤمنین چیست؟" },
    { icon: "🔥", text: "پاسخ به شبهه‌ی وهابیت درباره‌ی زیارت قبور" },
    { icon: "⚗️", text: "چرا فلسفه در دین مردود است؟" },
    { icon: "📿", text: "موضع صحیح درباره‌ی تصوف از منظر روایات" },
    { icon: "🌙", text: "روایات کتب اربعه درباره‌ی امامت" },
  ],
  ar: [
    { icon: "⚔️", text: "لماذا العلامة يعارض المرجعية والتقليد؟" },
    { icon: "📖", text: "ما الدليل القرآني على ولاية أمير المؤمنين؟" },
    { icon: "🔥", text: "الرد على شبهة الوهابية في زيارة القبور" },
    { icon: "⚗️", text: "لماذا الفلسفة مردودة في الدين؟" },
    { icon: "📿", text: "موقف الروايات الصحيحة من التصوف" },
    { icon: "🌙", text: "روايات الكتب الأربعة في الإمامة" },
  ]
};

const TITLES = {
  fa: { main: "محدث اهل‌بیت", sub: "در سبک علامه حسن‌اللهیاری", you: "شما", bot: "محدث", clear: "پاک‌کردن", send: "ارسال", placeholder: "سوال بپرسید... (Enter ارسال، Shift+Enter خط جدید)" },
  ar: { main: "محدّث أهل البيت", sub: "على منهج العلامة حسن اللهياري", you: "أنت", bot: "المحدّث", clear: "مسح", send: "إرسال", placeholder: "اطرح سؤالك... (Enter للإرسال، Shift+Enter لسطر جديد)" }
};

const WELCOME = {
  fa: `بسم الله الرحمن الرحیم
اللهم صل على محمد وآل محمد

در خدمت مؤمنان هستم برای:
• پاسخ به سوالات عقیدتی با سند روایی
• احکام شرعی از روایات اهل‌بیت
• رد شبهات وهابیت و مخالفان
• تبیین مواضع صحیح درباره‌ی فلسفه، تصوف و تقلید
• مناظره‌ی مستدل

هر روایتی که ذکر شود، آدرس کامل ارائه می‌شود.`,
  ar: `بسم الله الرحمن الرحيم
اللهم صل على محمد وآل محمد

أنا في خدمة المؤمنين للإجابة على:
• الأسئلة العقدية بالسند الروائي الكامل
• الأحكام الشرعية من روايات أهل البيت
• الرد على شبهات الوهابية والمخالفين
• توضيح المواقف الصحيحة من الفلسفة والتصوف والتقليد
• المناظرة بالحجة والدليل

كل رواية تُذكر مع عنوانها الكامل.`
};

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════
export default function MohaddesAhlulBayt() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState("fa");
  const [showWelcome, setShowWelcome] = useState(true);
  const [donationOpen, setDonationOpen] = useState(false);
  const endRef = useRef(null);
  const taRef = useRef(null);
  const t = TITLES[lang];

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const send = async () => {
    const q = input.trim();
    if (!q || loading) return;
    const newMsgs = [...messages, { role: "user", content: q }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);
    setShowWelcome(false);
    taRef.current && (taRef.current.style.height = "auto");

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMsgs,
        }),
      });
      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || (lang === "fa" ? "خطا در دریافت پاسخ" : "خطأ في الاستجابة");
      setMessages([...newMsgs, { role: "assistant", content: text }]);
    } catch {
      setMessages([...newMsgs, { role: "assistant", content: lang === "fa" ? "⚠️ خطا در اتصال" : "⚠️ خطأ في الاتصال" }]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };
  const resize = e => { e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px"; };

  return (
    <div style={S.root}>
      {/* Islamic geometric background */}
      <canvas id="bg" style={{ position: "fixed", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 0 }} />
      <BgPattern />

      {/* HEADER */}
      <header style={S.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={S.logo}>
            <span style={{ fontSize: 22 }}>☪</span>
          </div>
          <div>
            <div style={S.title}>{t.main}</div>
            <div style={S.subtitle}>{t.sub}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={() => setDonationOpen(true)} style={S.donateBtn}>
            {lang === "fa" ? "💛 حمایت مالی" : "💛 الدعم"}
          </button>
          <LangToggle lang={lang} setLang={setLang} />
          {messages.length > 0 && (
            <button onClick={() => { setMessages([]); setShowWelcome(true); }} style={S.clearBtn}>
              {t.clear}
            </button>
          )}
        </div>
      </header>

      {/* MESSAGES AREA */}
      <main style={S.main}>
        {showWelcome && (
          <div style={S.welcomeWrap}>
            <div style={S.welcomeIcon}>☪</div>
            <div style={S.welcomeArabic}>
              {lang === "fa" ? "بسم الله الرحمن الرحیم" : "بسم الله الرحمن الرحيم"}
            </div>
            <div style={S.welcomeText}>{WELCOME[lang]}</div>
            <div style={S.chips}>
              {SUGGESTIONS[lang].map((s, i) => (
                <button key={i} style={S.chip}
                  onClick={() => { setInput(s.text); taRef.current?.focus(); }}
                  onMouseOver={e => e.currentTarget.style.background = "rgba(180,130,20,0.2)"}
                  onMouseOut={e => e.currentTarget.style.background = "rgba(180,130,20,0.07)"}
                >
                  <span style={{ fontSize: 15 }}>{s.icon}</span>
                  <span>{s.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <MessageBubble key={i} msg={m} lang={lang} t={t} />
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
            <div style={S.loadingBubble}>
              {[0, 1, 2].map(d => (
                <span key={d} style={{ ...S.dot, animationDelay: `${d * 0.2}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </main>

      {/* INPUT AREA */}
      <footer style={S.footer}>
        <div style={S.inputWrap}>
          <textarea
            ref={taRef}
            value={input}
            onChange={e => { setInput(e.target.value); resize(e); }}
            onKeyDown={onKey}
            placeholder={t.placeholder}
            rows={1}
            style={S.textarea}
            onFocus={e => e.target.style.borderColor = "rgba(180,130,20,0.7)"}
            onBlur={e => e.target.style.borderColor = "rgba(180,130,20,0.25)"}
          />
          <button onClick={send} disabled={loading || !input.trim()} style={{
            ...S.sendBtn,
            background: loading || !input.trim() ? "rgba(180,130,20,0.15)" : "linear-gradient(135deg,#c8971a,#7a5500)",
            color: loading || !input.trim() ? "rgba(180,130,20,0.3)" : "#fff",
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            boxShadow: loading || !input.trim() ? "none" : "0 4px 18px rgba(180,130,20,0.35)",
          }}>↩</button>
        </div>
        <div style={S.footNote}>
          {lang === "fa"
            ? "این ابزار جایگزین علمای معتبر نیست — برای مسائل مهم به اهل علم رجوع کنید"
            : "هذه الأداة لا تغني عن العلماء المعتبرين — للمسائل الجوهرية استشر أهل العلم"}
        </div>
      </footer>

      {/* DONATION MODAL */}
      {donationOpen && <DonationModal lang={lang} onClose={() => setDonationOpen(false)} />}

      <style>{CSS}</style>
    </div>
  );
}

// ─── Message Bubble ───────────────────────────────────────
function MessageBubble({ msg, lang, t }) {
  const isUser = msg.role === "user";
  return (
    <div style={{ marginBottom: 22, display: "flex", flexDirection: "column", alignItems: isUser ? "flex-start" : "flex-end", animation: "slideIn .3s ease" }}>
      <div style={{ fontSize: 11, color: "rgba(180,130,20,0.4)", marginBottom: 5, padding: "0 4px" }}>
        {isUser ? t.you : t.bot}
      </div>
      <div style={{
        maxWidth: "88%",
        padding: "14px 18px",
        borderRadius: isUser ? "18px 18px 18px 4px" : "18px 18px 4px 18px",
        background: isUser ? "rgba(180,130,20,0.1)" : "rgba(15,8,0,0.85)",
        border: `1px solid ${isUser ? "rgba(180,130,20,0.22)" : "rgba(180,130,20,0.13)"}`,
        color: isUser ? "rgba(255,225,140,0.92)" : "rgba(240,218,175,0.97)",
        fontSize: 14.5, lineHeight: 2.1,
        whiteSpace: "pre-wrap",
        backdropFilter: "blur(6px)",
        boxShadow: isUser ? "none" : "0 6px 28px rgba(0,0,0,0.45)",
        direction: "rtl",
        fontFamily: lang === "fa" ? "'Vazirmatn',Tahoma,serif" : "'Amiri','Traditional Arabic',serif",
      }}>
        {msg.content}
      </div>
    </div>
  );
}

// ─── Lang Toggle ──────────────────────────────────────────
function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "rgba(180,130,20,0.08)", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(180,130,20,0.18)" }}>
      {["fa", "ar"].map(l => (
        <button key={l} onClick={() => setLang(l)} style={{
          padding: "5px 14px", border: "none", cursor: "pointer", fontSize: 13,
          background: lang === l ? "rgba(180,130,20,0.28)" : "transparent",
          color: lang === l ? "#c8971a" : "rgba(180,130,20,0.45)",
          fontWeight: lang === l ? 700 : 400, transition: "all .2s",
        }}>{l === "fa" ? "فا" : "عر"}</button>
      ))}
    </div>
  );
}

// ─── Background Pattern ───────────────────────────────────
function BgPattern() {
  return (
    <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", opacity: 0.035, pointerEvents: "none", zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="geo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <polygon points="50,4 96,27 96,73 50,96 4,73 4,27" fill="none" stroke="#c8971a" strokeWidth="0.6" />
          <polygon points="50,18 82,34 82,66 50,82 18,66 18,34" fill="none" stroke="#c8971a" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="8" fill="none" stroke="#c8971a" strokeWidth="0.5" />
          <line x1="50" y1="4" x2="50" y2="18" stroke="#c8971a" strokeWidth="0.3" />
          <line x1="50" y1="82" x2="50" y2="96" stroke="#c8971a" strokeWidth="0.3" />
          <line x1="4" y1="27" x2="18" y2="34" stroke="#c8971a" strokeWidth="0.3" />
          <line x1="82" y1="34" x2="96" y2="27" stroke="#c8971a" strokeWidth="0.3" />
          <line x1="4" y1="73" x2="18" y2="66" stroke="#c8971a" strokeWidth="0.3" />
          <line x1="82" y1="66" x2="96" y2="73" stroke="#c8971a" strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#geo)" />
    </svg>
  );
}

// ─── Donation Modal ───────────────────────────────────────
function DonationModal({ lang, onClose }) {
  const fa = lang === "fa";
  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={S.modal} onClick={e => e.stopPropagation()}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>💛</div>
        <div style={{ color: "#c8971a", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
          {fa ? "حمایت مالی از این پروژه" : "دعم هذا المشروع"}
        </div>
        <div style={{ color: "rgba(240,218,175,0.85)", fontSize: 14, lineHeight: 2.1, marginBottom: 20, textAlign: "right" }}>
          {fa ? `این ابزار با نیت خدمت به مکتب اهل‌بیت (علیهم‌السلام) ساخته شده است.

هزینه‌های سرور و توسعه از طریق کمک‌های داوطلبانه‌ی مؤمنان تأمین می‌شود.

مازاد درآمد با اطلاع کامل شما به شبکه‌ی علامه حسن‌اللهیاری جهت پیشبرد فعالیت‌های ایشان واریز می‌شود.

هیچ اجباری نیست — هر مقداری با میل و رضای خود.` :
          `هذه الأداة بُنيت بنية خدمة مدرسة أهل البيت (عليهم السلام).

تكاليف الخادم والتطوير تُموَّل من خلال التبرعات الطوعية للمؤمنين.

فائض الدخل، وبعلمكم الكامل، يُرسل إلى شبكة العلامة حسن اللهياري لدعم نشاطاتهم.

لا إلزام — أي مبلغ بطوعكم واختياركم.`}
        </div>
        <div style={{ background: "rgba(180,130,20,0.1)", border: "1px solid rgba(180,130,20,0.25)", borderRadius: 12, padding: "14px 18px", marginBottom: 20, color: "rgba(240,218,175,0.7)", fontSize: 13 }}>
          {fa ? "🔜 درگاه پرداخت به زودی فعال می‌شود" : "🔜 بوابة الدفع ستُفعَّل قريباً"}
        </div>
        <button onClick={onClose} style={{ ...S.clearBtn, padding: "10px 28px", fontSize: 14 }}>
          {fa ? "بستن" : "إغلاق"}
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════
const S = {
  root: {
    minHeight: "100vh", display: "flex", flexDirection: "column",
    background: "linear-gradient(160deg,#080400 0%,#150900 40%,#0c0500 100%)",
    direction: "rtl", position: "relative", overflow: "hidden",
    fontFamily: "'Vazirmatn','Tahoma',serif",
  },
  header: {
    borderBottom: "1px solid rgba(180,130,20,0.18)",
    padding: "14px 20px", display: "flex", alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(0,0,0,0.55)", backdropFilter: "blur(14px)",
    position: "sticky", top: 0, zIndex: 20,
  },
  logo: {
    width: 46, height: 46, borderRadius: "50%",
    background: "linear-gradient(135deg,#c8971a,#7a5500)",
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 0 22px rgba(180,130,20,0.35)", flexShrink: 0,
  },
  title: { color: "#c8971a", fontSize: 15, fontWeight: 700, letterSpacing: .5 },
  subtitle: { color: "rgba(180,130,20,0.55)", fontSize: 11, marginTop: 2 },
  donateBtn: {
    background: "rgba(180,130,20,0.12)", border: "1px solid rgba(180,130,20,0.3)",
    borderRadius: 16, padding: "6px 14px", color: "#c8971a",
    cursor: "pointer", fontSize: 12, fontFamily: "inherit", transition: "all .2s",
  },
  clearBtn: {
    background: "rgba(180,130,20,0.08)", border: "1px solid rgba(180,130,20,0.18)",
    borderRadius: 8, padding: "6px 12px", color: "rgba(180,130,20,0.55)",
    cursor: "pointer", fontSize: 12, fontFamily: "inherit", transition: "all .2s",
  },
  main: {
    flex: 1, overflowY: "auto", padding: "24px 16px",
    maxWidth: 820, width: "100%", margin: "0 auto", boxSizing: "border-box",
    scrollbarWidth: "thin", scrollbarColor: "rgba(180,130,20,0.25) transparent",
    zIndex: 5, position: "relative",
  },
  welcomeWrap: { textAlign: "center", padding: "30px 10px 20px", animation: "fadeIn .8s ease" },
  welcomeIcon: { fontSize: 44, marginBottom: 14 },
  welcomeArabic: { color: "#c8971a", fontSize: 20, fontWeight: 700, marginBottom: 16 },
  welcomeText: {
    color: "rgba(220,190,120,0.75)", fontSize: 13.5, lineHeight: 2.2,
    maxWidth: 520, margin: "0 auto 28px", whiteSpace: "pre-line", textAlign: "right",
  },
  chips: { display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" },
  chip: {
    background: "rgba(180,130,20,0.07)", border: "1px solid rgba(180,130,20,0.22)",
    borderRadius: 20, padding: "9px 16px", color: "rgba(220,190,120,0.85)",
    cursor: "pointer", fontSize: 13, fontFamily: "inherit",
    display: "flex", gap: 7, alignItems: "center", transition: "all .2s",
  },
  loadingBubble: {
    padding: "14px 20px", borderRadius: "18px 18px 4px 18px",
    background: "rgba(15,8,0,0.85)", border: "1px solid rgba(180,130,20,0.13)",
    display: "flex", gap: 7, alignItems: "center",
  },
  dot: {
    width: 7, height: 7, borderRadius: "50%", background: "#c8971a",
    display: "inline-block",
    animation: "pulse 1.2s ease-in-out infinite",
  },
  footer: {
    borderTop: "1px solid rgba(180,130,20,0.13)", padding: "14px 16px",
    background: "rgba(0,0,0,0.65)", backdropFilter: "blur(14px)",
    zIndex: 10, position: "relative",
  },
  inputWrap: {
    maxWidth: 820, margin: "0 auto", display: "flex", gap: 10, alignItems: "flex-end",
  },
  textarea: {
    flex: 1, resize: "none", background: "rgba(180,130,20,0.07)",
    border: "1px solid rgba(180,130,20,0.25)", borderRadius: 14,
    padding: "12px 16px", color: "rgba(240,218,175,0.95)", fontSize: 14,
    fontFamily: "inherit", outline: "none", lineHeight: 1.8, direction: "rtl",
    maxHeight: 140, overflowY: "auto", transition: "border-color .2s",
    scrollbarWidth: "thin", scrollbarColor: "rgba(180,130,20,0.25) transparent",
  },
  sendBtn: {
    width: 46, height: 46, borderRadius: "50%", border: "none",
    fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0, transition: "all .2s",
  },
  footNote: {
    textAlign: "center", marginTop: 10,
    color: "rgba(180,130,20,0.22)", fontSize: 11,
  },
  modalOverlay: {
    position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 100, backdropFilter: "blur(4px)",
  },
  modal: {
    background: "linear-gradient(160deg,#120800,#1e0e00)",
    border: "1px solid rgba(180,130,20,0.3)", borderRadius: 20,
    padding: "32px 28px", maxWidth: 440, width: "90%", textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
  },
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&family=Amiri:wght@400;700&display=swap');
  @keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
  @keyframes slideIn { from{opacity:0;transform:translateX(8px)} to{opacity:1;transform:translateX(0)} }
  @keyframes pulse { 0%,100%{opacity:.25;transform:scale(.8)} 50%{opacity:1;transform:scale(1.15)} }
  * { box-sizing:border-box; }
  ::-webkit-scrollbar { width:4px; }
  ::-webkit-scrollbar-thumb { background:rgba(180,130,20,0.25); border-radius:2px; }
  textarea::placeholder { color:rgba(180,130,20,0.3); }
  button:hover { filter:brightness(1.1); }
`;
