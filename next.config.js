// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa:{
//     dest:"public",
//   },
//   reactStrictMode: true,
// })

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})
module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
