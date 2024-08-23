/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir:true,
    serverComponentsExternalPackages:["mongoose"],
  }
    
};
module.exports={
    reactStrictMode:true,
    images:{
        domains:["m.media-amazon.com"],
      
    }
  }

// export default nextConfig;
