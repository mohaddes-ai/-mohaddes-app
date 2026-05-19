import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `أنت محدّث شيعي اثني عشري، صوت العقيدة الحقة لمدرسة أهل البيت (عليهم السلام).

══════════════════════════════════
القاعدة الذهبية — لا تخالفها أبداً
══════════════════════════════════

في الأحكام الشرعية:
- مهمتك الوحيدة: اذكر الآيات القرآنية والروايات المتعلقة بالمسألة — فقط
- لا تُعطِ رأيك الشخصي أبداً في الأحكام
- لا تقل «برأيي» أو «أعتقد» أو «الصحيح» أو «الأرجح» أو «الأقوى»
- لا تستنتج حكماً من عندك
- مهمتك: انقل الرواية — لا تُفتِ

الاستثناء الوحيد:
إذا كان في ذاكرتك نص صريح لما قاله العلامة حسن اللهياري في هذه المسألة بالذات، فيمكنك ذكره هكذا:
«وقد ذكر العلامة حسن اللهياري في هذه المسألة: [نص كلامه]»
ثم أضف فوراً:
«وتجدر الإشارة إلى أن رأي العلامة اللهياري — كأي محدث — ليس حجة شرعية، ولا يُبرئ ذمة السائل بالضرورة»

إذا لم يكن في ذاكرتك نص صريح له: لا تذكر اسمه ولا تخترع قولاً له.

══════════════════════════════════
كيف تجيب على الأحكام الشرعية
══════════════════════════════════

الخطوة الأولى — الآيات القرآنية:
اذكر الآيات المتعلقة بالمسألة مع اسم السورة ورقم الآية

الخطوة الثانية — الروايات:
اذكر جميع الروايات الواردة في الباب مع:
- اسم الكتاب + الجزء + الصفحة + رقم الحديث
- النص العربي للرواية
- الترجمة الفارسية (إذا كان السائل فارسياً)

الخطوة الثالثة — إن وُجد نص للعلامة اللهياري فقط:
اذكره مع التنبيه أنه ليس حجة شرعية

الخطوة الرابعة — الختام:
قل للسائل: «هذه هي الروايات الواردة في المسألة — اقرأها بنفسك وتدبّر فيها»

══════════════════════════════════
الهوية العقدية
══════════════════════════════════

- في العقيدة الحقة للشيعة الاثني عشرية: الولاء لأهل البيت والبراءة من أعدائهم واجبان
- في العقيدة الحقة: الرجوع المباشر لروايات أهل البيت هو الأصل — لا التقليد ولا المرجعية الرائجة
- في العقيدة الحقة: القياس والرأي والاجتهاد بالعقل المستقل مردودان
- في العقيدة الحقة: ولاية الفقيه بدعة محدثة لا أصل لها — الولاية للمعصومين الأربعة عشر فقط
- خميني وخامنئي مبتدعان ضالان: وحدة الوجود، التصوف، وولاية الفقيه — لا تسمهما عالماً
- الفلسفة اليونانية (ابن سينا، الملا صدرا) دخيلة على الدين ومردودة
- التصوف والصوفية باطلان بجميع طوائفهم
- الوهابية والسلفية ضلال — يُرد عليهم بالدليل القاطع
- في زمن الغيبة: «فارجعوا إلى رواة حديثنا» — لا إلى الفقيه

══════════════════════════════════
في المناظرة والعقيدة
══════════════════════════════════

في مسائل العقيدة (ليس الأحكام): يمكنك بيان ما تثبته الروايات بوضوح.
في المناظرة: هجومي بالحجة، افضح تناقضات الخصم من كتبه.
عند ذكر المعصومين: دائماً بلقبهم الكامل وصلواتهم.
أجب بلغة السائل.

---

شما محدث شیعه اثناعشری هستید — صدای عقیده‌ی حقه‌ی مدرسه اهل‌بیت (علیهم السلام).

══════════════════════════════════
قانون طلایی — هرگز نقض نکن
══════════════════════════════════

در سوالات احکام شرعی:
- وظیفه‌ی تو فقط این است: آیات قرآن و روایات مربوط به مسئله را بیاوری — فقط همین
- هرگز نظر شخصی خود را در احکام نده
- هرگز نگو «به نظر من»، «معتقدم»، «صحیح‌تر»، «اقوی»، «ارجح»
- هرگز از خودت حکم استنتاج نکن
- وظیفه‌ات: روایت را نقل کن — فتوا نده

استثنای تنها:
اگر در حافظه‌ات متن صریحی از آنچه علامه حسن اللهیاری در همین مسئله گفته‌اند داری، می‌توانی اینطور ذکر کنی:
«علامه حسن اللهیاری در این مسئله فرموده‌اند: [متن کلام ایشان]»
و بلافاصله اضافه کن:
«شایان ذکر است که نظر علامه اللهیاری — مانند هر محدث دیگری — حجیت شرعی ندارد و با عمل به آن لزوماً مبرئ الذمه نمی‌شوید»

اگر متن صریحی از ایشان در این مسئله نداری: نامشان را ذکر نکن و کلامی برایشان نساز.

══════════════════════════════════
روش پاسخ به احکام شرعی
══════════════════════════════════

گام اول — آیات قرآن:
آیات مربوط به مسئله را با نام سوره و شماره آیه ذکر کن

گام دوم — روایات:
تمام روایات واردشده در آن باب را بیاور با:
- نام کتاب + جلد + صفحه + شماره حدیث
- متن عربی روایت
- ترجمه فارسی

گام سوم — اگر نص علامه اللهیاری موجود بود فقط:
با تنبیه که حجیت شرعی ندارد

گام چهارم — پایان:
به سائل بگو: «اینها روایات واردشده در این مسئله‌اند — خودت بخوان و تدبر کن»

══════════════════════════════════
القاب معصومین
══════════════════════════════════

پیامبر اکرم (صلی الله علیه و آله)
امیرالمؤمنین علی (علیه السلام)
حضرت فاطمه زهرا (سلام الله علیها)
امام حسن، امام حسین، ... امام مهدی (علیهم السلام)
هرگز بدون لقب و صلوات ذکر نکن.

به زبان سائل جواب بده.`;

const SUGGESTIONS = {
  fa: [
    { icon: "⚔️", text: "چرا ولایت فقیه بدعت است؟" },
    { icon: "📖", text: "دلیل قرآنی ولایت امیرالمؤمنین (ع)" },
    { icon: "🔥", text: "پاسخ به شبهات وهابیت" },
    { icon: "⚗️", text: "چرا فلسفه در دین مردود است؟" },
    { icon: "📿", text: "روایات درباره‌ی تصوف" },
    { icon: "🌙", text: "حکم روزه مسافر در سفر کاری" },
  ],
  ar: [
    { icon: "⚔️", text: "لماذا ولاية الفقيه بدعة؟" },
    { icon: "📖", text: "الدليل القرآني على ولاية أمير المؤمنين (ع)" },
    { icon: "🔥", text: "الرد على شبهات الوهابية" },
    { icon: "⚗️", text: "لماذا الفلسفة مردودة في الدين؟" },
    { icon: "📿", text: "روايات التصوف" },
    { icon: "🌙", text: "حكم صوم المسافر في سفر العمل" },
  ]
};

const T = {
  fa: { main: "محدث", sub: "بازگشت به ثقلین", you: "شما", bot: "محدث", clear: "پاک‌کردن", placeholder: "سوال بپرسید... (Enter ارسال، Shift+Enter خط جدید)" },
  ar: { main: "محدّث", sub: "العودة إلى الثقلين", you: "أنت", bot: "المحدّث", clear: "مسح", placeholder: "اطرح سؤالك... (Enter للإرسال، Shift+Enter لسطر جديد)" }
};

export default function Mohaddes() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState("fa");
  const [showWelcome, setShowWelcome] = useState(true);
  const endRef = useRef(null);
  const taRef = useRef(null);
  const t = T[lang];

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const send = async () => {
    const q = input.trim();
    if (!q || loading) return;
    const newMsgs = [...messages, { role: "user", content: q }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);
    setShowWelcome(false);
    if (taRef.current) taRef.current.style.height = "auto";

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMsgs }),
      });
      const data = await res.json();
      const text = data.reply || (lang === "fa" ? "خطا در دریافت پاسخ" : "خطأ في الاستجابة");
      setMessages([...newMsgs, { role: "assistant", content: text }]);
    } catch {
      setMessages([...newMsgs, { role: "assistant", content: lang === "fa" ? "⚠️ خطا در اتصال" : "⚠️ خطأ في الاتصال" }]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      background: "linear-gradient(160deg,#080400 0%,#150900 40%,#0c0500 100%)",
      direction: "rtl", fontFamily: lang === "fa" ? "'Vazirmatn',Tahoma,serif" : "'Amiri','Traditional Arabic',serif",
    }}>
      <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", opacity: 0.035, pointerEvents: "none", zIndex: 0 }}>
        <defs>
          <pattern id="geo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <polygon points="50,4 96,27 96,73 50,96 4,73 4,27" fill="none" stroke="#c8971a" strokeWidth="0.6" />
            <polygon points="50,18 82,34 82,66 50,82 18,66 18,34" fill="none" stroke="#c8971a" strokeWidth="0.4" />
            <circle cx="50" cy="50" r="8" fill="none" stroke="#c8971a" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geo)" />
      </svg>

      <header style={{
        borderBottom: "1px solid rgba(180,130,20,0.18)", padding: "14px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(14px)",
        position: "sticky", top: 0, zIndex: 20,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="/IMG_4045.jpeg" alt="محدث" style={{
            width: 46, height: 46, borderRadius: "50%", objectFit: "cover",
            boxShadow: "0 0 22px rgba(180,130,20,0.35)",
            border: "1px solid rgba(180,130,20,0.3)",
          }} />
          <div>
            <div style={{ color: "#c8971a", fontSize: 18, fontWeight: 700 }}>{t.main}</div>
            <div style={{ color: "rgba(180,130,20,0.55)", fontSize: 11 }}>{t.sub}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <div style={{ display: "flex", background: "rgba(180,130,20,0.08)", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(180,130,20,0.18)" }}>
            {["fa", "ar"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: "5px 14px", border: "none", cursor: "pointer", fontSize: 13,
                background: lang === l ? "rgba(180,130,20,0.28)" : "transparent",
                color: lang === l ? "#c8971a" : "rgba(180,130,20,0.45)",
                fontWeight: lang === l ? 700 : 400,
              }}>{l === "fa" ? "فا" : "عر"}</button>
            ))}
          </div>
          {messages.length > 0 && (
            <button onClick={() => { setMessages([]); setShowWelcome(true); }} style={{
              background: "rgba(180,130,20,0.08)", border: "1px solid rgba(180,130,20,0.18)",
              borderRadius: 8, padding: "6px 12px", color: "rgba(180,130,20,0.55)",
              cursor: "pointer", fontSize: 12, fontFamily: "inherit",
            }}>{t.clear}</button>
          )}
        </div>
      </header>

      <main style={{
        flex: 1, overflowY: "auto", padding: "24px 16px",
        maxWidth: 820, width: "100%", margin: "0 auto", boxSizing: "border-box",
        zIndex: 5, position: "relative",
      }}>
        {showWelcome && (
          <div style={{ textAlign: "center", padding: "30px 10px 20px" }}>
            <img src="/IMG_4045.jpeg" alt="محدث" style={{
              width: 110, height: 110, borderRadius: "50%", objectFit: "cover",
              marginBottom: 20, boxShadow: "0 0 40px rgba(180,130,20,0.4)",
              border: "2px solid rgba(180,130,20,0.4)",
            }} />
            <div style={{ color: "#c8971a", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
              {lang === "fa" ? "بسم الله الرحمن الرحیم" : "بسم الله الرحمن الرحيم"}
            </div>
            <div style={{ color: "rgba(180,130,20,0.7)", fontSize: 14, marginBottom: 12, fontStyle: "italic" }}>
              «فَارْجِعُوا إِلَى رُوَاةِ حَدِيثِنَا»
            </div>
            <div style={{ color: "rgba(220,190,120,0.65)", fontSize: 13, lineHeight: 2, maxWidth: 520, margin: "0 auto 28px" }}>
              {lang === "fa"
                ? "نقل آیات قرآن و روایات اهل‌بیت (علیهم السلام)\nبدون رأی و فتوا — فقط روایت\nرسوا کردن بدعت‌ها با دلیل قرآنی و روایی"
                : "نقل آيات القرآن وروايات أهل البيت (عليهم السلام)\nبلا رأي ولا فتوى — فقط رواية\nفضح البدع بالدليل القرآني والروائي"}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {SUGGESTIONS[lang].map((s, i) => (
                <button key={i} onClick={() => { setInput(s.text); taRef.current?.focus(); }} style={{
                  background: "rgba(180,130,20,0.07)", border: "1px solid rgba(180,130,20,0.22)",
                  borderRadius: 20, padding: "9px 16px", color: "rgba(220,190,120,0.85)",
                  cursor: "pointer", fontSize: 13, fontFamily: "inherit",
                  display: "flex", gap: 7, alignItems: "center",
                }}>
                  <span>{s.icon}</span><span>{s.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} style={{
            marginBottom: 22, display: "flex", flexDirection: "column",
            alignItems: m.role === "user" ? "flex-start" : "flex-end",
          }}>
            <div style={{ fontSize: 11, color: "rgba(180,130,20,0.4)", marginBottom: 5, padding: "0 4px" }}>
              {m.role === "user" ? t.you : t.bot}
            </div>
            <div style={{
              maxWidth: "88%", padding: "14px 18px",
              borderRadius: m.role === "user" ? "18px 18px 18px 4px" : "18px 18px 4px 18px",
              background: m.role === "user" ? "rgba(180,130,20,0.1)" : "rgba(15,8,0,0.85)",
              border: `1px solid ${m.role === "user" ? "rgba(180,130,20,0.22)" : "rgba(180,130,20,0.13)"}`,
              color: m.role === "user" ? "rgba(255,225,140,0.92)" : "rgba(240,218,175,0.97)",
              fontSize: 14.5, lineHeight: 2.1, whiteSpace: "pre-wrap",
              backdropFilter: "blur(6px)",
            }}>{m.content}</div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
            <div style={{
              padding: "14px 20px", borderRadius: "18px 18px 4px 18px",
              background: "rgba(15,8,0,0.85)", border: "1px solid rgba(180,130,20,0.13)",
              display: "flex", gap: 7, alignItems: "center",
            }}>
              {[0, 1, 2].map(d => (
                <div key={d} style={{
                  width: 7, height: 7, borderRadius: "50%", background: "#c8971a",
                  animation: `pulse 1.2s ease-in-out ${d * 0.2}s infinite`,
                }} />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </main>

      <footer style={{
        borderTop: "1px solid rgba(180,130,20,0.13)", padding: "14px 16px",
        background: "rgba(0,0,0,0.65)", backdropFilter: "blur(14px)", zIndex: 10,
      }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", gap: 10, alignItems: "flex-end" }}>
          <textarea
            ref={taRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder={t.placeholder}
            rows={1}
            style={{
              flex: 1, resize: "none",
              background: "rgba(180,130,20,0.07)", border: "1px solid rgba(180,130,20,0.25)",
              borderRadius: 14, padding: "12px 16px",
              color: "rgba(240,218,175,0.95)", fontSize: 14,
              fontFamily: "inherit", outline: "none", lineHeight: 1.8,
              direction: "rtl", maxHeight: 140, overflowY: "auto",
            }}
            onInput={e => {
              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px";
            }}
          />
          <button onClick={send} disabled={loading || !input.trim()} style={{
            width: 46, height: 46, borderRadius: "50%", border: "none",
            background: loading || !input.trim() ? "rgba(180,130,20,0.15)" : "linear-gradient(135deg,#c8971a,#7a5500)",
            color: loading || !input.trim() ? "rgba(180,130,20,0.3)" : "#fff",
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>↩</button>
        </div>
        <div style={{ textAlign: "center", marginTop: 8, color: "rgba(180,130,20,0.25)", fontSize: 11 }}>
          {lang === "fa"
            ? "محدث فقط روایت نقل می‌کند — رأی او حجیت شرعی ندارد"
            : "المحدّث ينقل الرواية فقط — رأيه ليس حجة شرعية"}
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&family=Amiri:wght@400;700&display=swap');
        @keyframes pulse { 0%,100%{opacity:.25;transform:scale(.8)} 50%{opacity:1;transform:scale(1.15)} }
        * { box-sizing:border-box; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:rgba(180,130,20,0.25); border-radius:2px; }
        textarea::placeholder { color:rgba(180,130,20,0.3); }
      `}</style>
    </div>
  );
}
