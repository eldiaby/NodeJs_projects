const fs = require(`node:fs`);

const html = fs.readFileSync(`${__dirname}/not-found.html`, 'utf-8');

module.exports.notFound = (req, res) => res.status(404).send(html);
