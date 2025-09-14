#!/usr/bin/env node

const QRCode = require('qrcode');
const fs = require('fs');

function printUsage() {
  console.log('Uso: node index.js <URL-do-produto> [nome-do-arquivo.png|svg]');
  console.log('Exemplo: node index.js https://www.seuecommerce.com/produto/123 qrcode-produto.png');
}

const [,, url, outputFile] = process.argv;

if (!url) {
  printUsage();
  process.exit(1);
}

const file = outputFile || 'qrcode.png';
const ext = file.endsWith('.svg') ? 'svg' : 'png';

if (ext === 'svg') {
  QRCode.toString(url, { type: 'svg' }, function (err, svg) {
    if (err) throw err;
    fs.writeFileSync(file, svg);
    console.log(`QR Code SVG salvo em: ${file}`);
  });
} else {
  QRCode.toFile(file, url, {
    color: {
      dark: '#000',
      light: '#FFF'
    }
  }, function (err) {
    if (err) throw err;
    console.log(`QR Code PNG salvo em: ${file}`);
  });
}
