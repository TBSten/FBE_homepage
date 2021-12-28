module.exports = {
    siteUrl: process.env.HOST || 'https://fbe-hp.vercel.app',
    generateRobotsTxt: true, // ← robots.txt が不要なら false でおk
    outDir: './public'
}

