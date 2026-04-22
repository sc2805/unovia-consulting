import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

const parser = new Parser();
const RSS_URL = 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms';

async function fetchNews() {
  console.log('Fetching latest news from Economic Times Markets...');
  
  try {
    const feed = await parser.parseURL(RSS_URL);
    const items = feed.items.slice(0, 15).map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      contentSnippet: item.contentSnippet,
      source: 'Economic Times'
    }));

    const data = {
      lastUpdated: new Date().toISOString(),
      articles: items
    };

    const targetPath = path.join(process.cwd(), 'lib', 'daily-news.json');
    fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
    
    console.log(`Successfully saved ${items.length} articles to ${targetPath}`);
  } catch (error) {
    console.error('Error fetching news:', error);
    process.exit(1);
  }
}

fetchNews();
