/** @type {import('next').NextConfig} */

 

const nextConfig = {
    reactStrictMode: false, 
    images: {
        domains: ['res.cloudinary.com',"ucarecdn.com"],
      },
      typescript: { 
        ignoreBuildErrors: true, 
      },
}

module.exports = nextConfig
