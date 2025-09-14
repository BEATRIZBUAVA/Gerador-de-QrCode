require('dotenv').config();
const QRCode = require('qrcode');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('=== Gerador de QR Code para E-commerce ===');
  const url = await askQuestion('Informe a URL do produto: ');
  if (!url) {
    console.log('URL não informada. Encerrando.');
    rl.close();
    return;
  }
  const fileName = await askQuestion('Nome do arquivo de saída (ex: qrcode.png): ');
  const outputDir = path.resolve(__dirname, '../qrcodes');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
  const file = fileName || `qrcode-${Date.now()}.png`;
  const ext = file.endsWith('.svg') ? 'svg' : 'png';
  const filePath = path.join(outputDir, file);

  if (ext === 'svg') {
    QRCode.toString(url, { type: 'svg' }, function (err, svg) {
      if (err) throw err;
      fs.writeFileSync(filePath, svg);
      console.log(`QR Code SVG salvo em: ${filePath}`);
      rl.close();
    });
  } else {
    QRCode.toFile(filePath, url, {
      color: {
        dark: '#000',
        light: '#FFF'
      }
    }, function (err) {
      if (err) throw err;
      console.log(`QR Code PNG salvo em: ${filePath}`);
      rl.close();
    });
  }
}

main();
