const fs = require('fs');
const axios = require('axios');
const endOfLine = require('os').EOL;
const newsDataPath = 'http://localhost:4200/assets/news.json';
const routesFile = './routes.txt';

axios.get(newsDataPath).then(res => {
  const routes = [];
  res.data.forEach(newsitem => {
    routes.push('news/' + newsitem.id);
  });
  fs.writeFileSync(routesFile, routes.join(endOfLine), 'utf8');
}).catch(e => console.log(e));
