const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'public');
const htmlFile = path.join(source, 'index.html');
const spriteFile = path.join(source, 'sprite.svg');

const htmlContent = fs.readFileSync(htmlFile, 'utf8');
const spriteContent = fs.readFileSync(spriteFile, 'utf8');

const newHtmlContent = htmlContent.replace('<div class="sprite"></div>', spriteContent);

fs.writeFileSync(htmlFile, newHtmlContent);
