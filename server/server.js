const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint to get crop information
app.get('/api/crops', (req, res) => {
  const crops = [
    { id: 1, name: 'Rice' },
    { id: 2, name: 'Wheat' },
    { id: 3, name: 'Bajra' },
    { id: 4, name: 'Jowar' },
    // Add all 78 crops
  ];
  
  res.json(crops);
});

// API endpoint to get specific crop details
app.get('/api/crops/:id', (req, res) => {
  const cropId = req.params.id;
  
  // Run the Python script to get crop details
  const pythonProcess = spawn('python', ['scripts/get_crop_info.py', cropId]);
  
  let dataString = '';
  
  pythonProcess.stdout.on('data', (data) => {
    dataString += data.toString();
  });
  
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python script error: ${data}`);
  });
  
  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      return res.status(500).json({ error: 'Failed to get crop information' });
    }
    
    try {
      const cropInfo = JSON.parse(dataString);
      res.json(cropInfo);
    } catch (error) {
      res.status(500).json({ error: 'Invalid data returned from Python script' });
    }
  });
});

// API endpoint to get weather information
app.get('/api/weather/:district', (req, res) => {
  const districtId = req.params.district;
  
  // Run the Python script to get weather URL
  const pythonProcess = spawn('python', ['scripts/get_weather_url.py', districtId]);
  
  let dataString = '';
  
  pythonProcess.stdout.on('data', (data) => {
    dataString += data.toString();
  });
  
  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      return res.status(500).json({ error: 'Failed to get weather information' });
    }
    
    res.json({ url: dataString.trim() });
  });
});

// Catch-all handler to serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 