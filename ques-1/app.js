const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8008;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;
  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid query parameter. Please provide at least one URL.' });
  }

  const startTime = Date.now();
  const promises = urls.map(url => axios.get(url).catch(() => null));

  try {
    const responses = await Promise.all(promises);
    const validNumbers = responses
      .filter(response => response && response.data && Array.isArray(response.data.numbers))
      .flatMap(response => response.data.numbers)
      .filter(number => Number.isInteger(number));

    const mergedUniqueNumbers = Array.from(new Set(validNumbers)).sort((a, b) => a - b);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    if (elapsedTime > 500) {
      return res.status(500).json({ error: 'Processing time exceeded 500 milliseconds.' });
    }

    return res.json({ numbers: mergedUniqueNumbers });
  } catch (error) {
    return res.status(500).json({ error: 'Error processing the request.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
