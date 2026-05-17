import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'بسم اللّٰه الرحمن الرحيم. «فارجعوا إلى رواة حديثنا» به پلتفرم محدث خوش آمدید. آماده پاسخگویی به سوالات عقیدتی و احکام شما بر اساس روایات معتبر اهل‌بیت (ع) هستم.'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      // این بخش درخواست را به یک API امن در ورسل می‌فرستد که در قدم بعدی می‌سازیم
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, { role: 'user', text: userText }] 
        })
      });

      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', text: 'خطایی در دریافت پاسخ رخ داد. لطفا دوباره تلاش کنید.' }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: 'ارتباط با سرور برقرار نشد.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#E0E0E0', minHeight: '100vh', fontFamily: 'sans-serif', direction: 'rtl', padding: '20px' }}>
      {/* هدر برنامه */}
      <header style={{ textAlignment: 'center', borderBottom: '2px solid #D4AF37', paddingBottom: '10px', marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#D4AF37', margin: '0 0 5px 0', fontSize: '2rem' }}>محدث</h1>
        <p style={{ color: '#A0A0A0', margin: '0', fontSize: '1rem' }}>بازگشت به ثقلین</p>
      </header>

      {/* باکس چت */}
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#1E1E1E', borderRadius: '8px', padding: '15px', border: '1px solid #333' }}>
        <div style={{ height: '400px', overflowY: 'auto', marginBottom: '15px', padding: '10px', backgroundColor: '#151515', borderRadius: '4px' }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: '15px', textAlign: msg.role === 'user' ? 'left' : 'right' }}>
              <span style={{ 
                display: 'inline-block', 
                padding: '10px 14px', 
                borderRadius: '8px', 
                backgroundColor: msg.role === 'user' ? '#D4AF37' : '#2A2A2A', 
                color: msg.role === 'user' ? '#121212' : '#E0E0E0',
                maxWidth: '85%',
                whiteSpace: 'pre-line',
                textAlign: 'right'
              }}>
                {msg.text}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* فرم ارسال پیام */}
        <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="سوال عقیدتی یا فقهی خود را بپرسید..." 
            disabled={loading}
            style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #44 animate', backgroundColor: '#2A2A2A', color: '#FFF' }}
          />
          <button 
            type="submit" 
            disabled={loading}
            style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#D4AF37', color: '#121212', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {loading ? '...' : 'ارسال'}
          </button>
        </form>
      </div>

      {/* بخش حمایت مالی داوطلبانه */}
      <footer style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.85rem', color: '#888' }}>
        <p>این پلتفرم به صورت مستقل مدیریت می‌شود. عواید و حمایت‌های مالی مازاد، جهت پیشرفت شبکه جهانی به حساب علامه اللهیاری واریز می‌گردد.</p>
        <button style={{ background: 'none', border: '1px solid #D4AF37', color: '#D4AF37', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' }}>حمایت مالی داوطلبانه</button>
      </footer>
    </div>
  );
}
