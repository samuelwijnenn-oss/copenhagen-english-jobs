import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const adzunaUrl = `https://api.adzuna.com/v1/api/jobs/dk/search/1?app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_APP_KEY}&what=english&where=copenhagen&results_per_page=50`;
    
    const response = await fetch(adzunaUrl);
    const data = await response.json();

    let insertedCount = 0;

    for (const job of data.results) {
      const { error } = await supabase
        .from('jobs')
        .upsert({
          title: job.title,
          company: job.company.display_name,
          location: job.location.display_name,
          description: job.description,
          url: job.redirect_url,
          posted_at: job.created,
          source: 'adzuna',
          external_id: job.id
        }, { onConflict: 'url' });

      if (!error) insertedCount++;
    }

    return res.status(200).json({ 
      success: true, 
      inserted: insertedCount,
      total: data.results.length 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
