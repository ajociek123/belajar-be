const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Halo dari server Express!' });
});

app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});

