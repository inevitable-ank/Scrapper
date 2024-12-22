const express = require('express');
const cors = require('cors');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/reviews', reviewRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
