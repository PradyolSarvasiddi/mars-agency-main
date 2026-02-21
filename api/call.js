export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, phone } = req.body || {};

    // Validate inputs
    if (!name || !phone) {
        return res.status(400).json({ error: 'Name and phone are required.' });
    }

    const RETELL_API_KEY = process.env.RETELL_API_KEY;
    const RETELL_AGENT_ID = process.env.RETELL_AGENT_ID;
    const RETELL_PHONE_NUMBER = process.env.RETELL_PHONE_NUMBER;

    if (!RETELL_API_KEY || !RETELL_AGENT_ID || !RETELL_PHONE_NUMBER) {
        console.error('Missing Retell environment variables');
        return res.status(500).json({ error: 'Server configuration error.' });
    }

    try {
        const response = await fetch('https://api.retellai.com/v2/create-phone-call', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${RETELL_API_KEY}`,
            },
            body: JSON.stringify({
                from_number: RETELL_PHONE_NUMBER,
                to_number: phone,
                override_agent_id: RETELL_AGENT_ID,
                metadata: {
                    customer_name: name,
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Retell API error:', response.status, errorData);
            return res.status(502).json({ error: 'Failed to initiate call.' });
        }

        const data = await response.json();
        return res.status(200).json({ success: true, callId: data.call_id });
    } catch (err) {
        console.error('Retell API request failed:', err);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}
