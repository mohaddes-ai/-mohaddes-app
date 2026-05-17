import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { hadiths } = req.body;

    const { data, error } = await supabase
      .from('hadiths')
      .insert(hadiths);

    if (error) throw error;

    return res.status(200).json({ 
      success: true, 
      message: `${hadiths.length} روایت اضافه شد` 
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
