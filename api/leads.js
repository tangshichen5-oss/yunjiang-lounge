export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ ok: false });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const payload = request.body;

  if (!webhookUrl) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[云酱会客厅线索提交预览]', payload);
      return response.status(200).json({ ok: true, preview: true });
    }

    return response.status(503).json({ ok: false });
  }

  try {
    const sheetResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!sheetResponse.ok) {
      return response.status(502).json({ ok: false });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('[云酱会客厅线索提交失败]', error);
    return response.status(500).json({ ok: false });
  }
}
