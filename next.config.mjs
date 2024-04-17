/** @type {import('next').NextConfig} */
// react의 strictMode 가 활성화 되어있으면 개발모드에서는 useEffect 가 두번 렌더링 된다 
// strict 모드는 안전하지 않은 수명 주기, 레거시 API 사용 및 기타 여러 기능을 실별하는데 도움을 주기 때문에 특별한 경우가 아니면 활성화 시켜놓는 것이 좋다
const nextConfig = {
    
    reactStrictMode: false,
    images:{
        domains:['res.cloudinary.com','lh3.googleusercontent.com'],
        unoptimized:true
    }
};

export default nextConfig;
