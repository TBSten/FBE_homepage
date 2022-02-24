module.exports = {
    siteUrl: process.env.HOST || 'https://project-fbe.vercel.app',
    generateRobotsTxt: true, // ← robots.txt が不要なら false でおk
    outDir: './public'
}

