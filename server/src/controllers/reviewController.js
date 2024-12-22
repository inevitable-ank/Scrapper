const { scrapeReviews } = require('../utils/scrapeUtils');

exports.getReviews = async (req, res) => {
    const { page: url } = req.query;
    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    try {
        const reviews = await scrapeReviews(url);
        res.json({ reviews_count: reviews.length, reviews });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
