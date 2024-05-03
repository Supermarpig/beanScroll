import React, { useState, useEffect } from 'react';
import HeaderM from './HeaderM'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      // 當頁面向下滾動超過指定的距離時，設定 isScrolled 為 true
      const offset = window.scrollY > 20;
      setIsScrolled(offset);
    };
    handleScroll(); // 初始檢測

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 添加滾動監聽
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // 清理監聽
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='flex justify-center'>
      <div className={`bg-dark-300 px-6 lg:px-8 flex
        ${isScrolled
          ? 'shadow-dark-100 fixed top-[10px] rounded-xl z-50 animate-slide-down m-0 w-auto '
          : 'absolute w-full '} 
        `}>
        <nav
          className={`mx-auto max-w-screen-xl flex items-center justify-between py-4 text-white
          ${isScrolled ? '' : 'w-full'}
        `}
          aria-label="Global">
          {
            isMobile ? <></> :
              <div className="logo flex items-center">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 512 512">
                  {/* SVG path here */}
                </svg>
                <span className="ml-2 font-spaceGrotesk text-lg">Logo</span>
              </div>
          }
          <div className="flex gap-x-4 navigation items-center">
            {isMobile ?
              <HeaderM /> :
              <>
                <a className="transition-colors hover:text-primary-500 hover:bg-dark-300 px-3 py-2 rounded-md" href="/#home">Home</a>
                <a className="transition-colors hover:text-primary-500 hover:bg-dark-300 px-3 py-2 rounded-md" href="/#pricing">Pricing</a>
                <a className="transition-colors hover:text-primary-500 hover:bg-dark-300 px-3 py-2 rounded-md" href="/#faq">FAQ</a>
                <a className="transition-colors hover:text-primary-500 hover:bg-dark-300 px-3 py-2 rounded-md" href="/explore">Explore</a>
                <a className="transition-colors hover:text-primary-500 hover:bg-dark-300 px-3 py-2 rounded-md" target="_blank" href="/blog">Blog</a>
              </>
            }
          </div>
          <a className="relative inline-block text-dark-500 font-semibold bg-primary-500 hover:bg-primary-600 transition-colors rounded-full px-5 py-2 shadow-light-200" href="/sign-in">Sign in</a>
        </nav>
      </div>
    </header>

  );
};

export default Header;
