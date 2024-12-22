const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

exports.scrapeReviews = async (pageUrl) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });

    const content = await page.content();
    const $ = cheerio.load(content);

    let reviews = [];
    $('.review').each((index, element) => {
        const title = $(element).find('.review-title').text();
        const body = $(element).find('.review-body').text();
        const rating = $(element).find('.review-rating').text();
        const reviewer = $(element).find('.review-author').text();

        reviews.push({ title, body, rating: parseInt(rating, 10), reviewer });
    });

    await browser.close();
    return reviews;
};
