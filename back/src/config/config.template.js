module.exports = {
    'port': '8443',
    // Certificats utilisés uniquement si https: true
    // 'ssl_key': 'ssl/ssl.key',
    // 'ssl_crt': 'ssl/ssl.crt',
    'https': false,
    'secret': 'SecretAChangerPourLaGenerationDesCles',
    // URLs are external, WITHOUT ending /
    'url': 'https://localhost:8443',
    'front_url': 'https://localhost:8080',
}
