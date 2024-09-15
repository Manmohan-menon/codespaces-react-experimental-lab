const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/save-events', (req, res) => {
  const newEvent = req.body;

  fs.readFile('public/event-data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }

    let events = [];
    if (data) {
      try {
        events = JSON.parse(data);
      } catch (parseError) {
        return res.status(500).json({ message: 'Error parsing JSON data' });
      }
    }

    events.push(newEvent);

    fs.writeFile('public/event-data.json', JSON.stringify(events, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ message: 'Error writing file' });
      }
      res.json({ message: 'File saved successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});