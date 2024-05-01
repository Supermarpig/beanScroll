import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 当页面向下滚动超过指定的距离时，设置 isScrolled 为 true
      const offset = window.scrollY > 20;
      setIsScrolled(offset);
    };
    handleScroll(); // 初始检测

    // 添加滚动监听
    window.addEventListener('scroll', handleScroll);

    // 清理监听
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-dark-300 w-full px-6 lg:px-8 ${isScrolled ? 'shadow-dark-100 fixed top-[10px] left-1/4 transform -translate-x-1/3 min-w-[70%] w-[70%] rounded-xl z-50 animate-slide-down' : 'absolute'} `}>
    <nav className="mx-auto max-w-screen-xl flex items-center justify-between py-4 text-white" aria-label="Global">
        <div className="logo flex items-center">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 512 512">
            {/* SVG path here */}
        </svg>
        <span className="ml-2 font-spaceGrotesk text-lg">Logo</span>
        </div>
        <div className="flex gap-x-4 navigation items-center">
        <a className="transition-colors hover:text-primary-500 hover:bg-dark-300 px-3 py-2 rounded-md" href="/#home">Home</a>
        <a className="transition-colors hover:text-primary-500 hover:bg-dark-300 px-3 py-2 rounded-md" href="/#pricing">Pricing</a>
        <a className="transition-colors hover:text-primary-500 hover:bg-dark-300 px-3 py-2 rounded-md" href="/#faq">FAQ</a>
        <a className="transition-colors hover:text-primary-500 hover:bg-dark-300 px-3 py-2 rounded-md" href="/explore">Explore</a>
        <a className="transition-colors hover:text-primary-500 hover:bg-dark-300 px-3 py-2 rounded-md" target="_blank" href="/blog">Blog</a>
        <a className="relative inline-block text-dark-500 font-semibold bg-primary-500 hover:bg-primary-600 transition-colors rounded-full px-5 py-2 shadow-light-200" href="/sign-in">Sign in</a>
        </div>
    </nav>
    </header>

  );
};

export default Header;
