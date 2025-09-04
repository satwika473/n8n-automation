// server.js
const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors'); // To allow frontend requests

cloudinary.config({
  cloud_name: 'dmq3xjiwk',
  api_key: '399427788942585',
  api_secret: 'CrEBOtWq37OFIL_bo09RDbHOXQo'
});

const app = express();
app.use(cors());

app.get('/images', async (req, res) => {
  try {
    const result = await cloudinary.api.resources({ type: 'upload', prefix: '', max_results: 50 });
    const images = result.resources.map(file => file.secure_url);
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => console.log('Server running on port 4000'));