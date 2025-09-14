# Gerador de QR Codes para E-commerce (CLI)

Este projeto é um gerador de QR Codes personalizado para e-commerces, desenvolvido em Node.js e executado diretamente no terminal. Permite criar QR Codes de links de produtos para acesso rápido a páginas de vendas online.

## Funcionalidades

- Geração de QR Codes a partir de URLs de produtos
- Saída em formato PNG ou SVG
- CLI interativo: o terminal solicita a URL e o nome do arquivo
- Os QR Codes são salvos na pasta `qrcodes/`

## Como usar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Execute o gerador:

   ```sh
   npm start
   ```

   O terminal irá pedir:

   - A URL do produto
   - O nome do arquivo de saída (ex: `qrcode.png` ou `qrcode.svg`)

3. O QR Code será salvo na pasta `qrcodes/`.

## Requisitos

- Node.js 14+

## Observações

- O projeto não possui interface gráfica.
- Suporte a variáveis de ambiente via `.env` (opcional).
- O arquivo principal está em `src/qrcode-cli.js`.
