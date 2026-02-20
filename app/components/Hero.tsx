import Link from 'next/link';
import React from 'react';
import AnimatedButton from './animatedButton';

const animationStyles = `
  @keyframes revealText {
    from {
      opacity: 0;
      clip-path: inset(0 100% 0 0);
    }
    to {
      opacity: 1;
      clip-path: inset(0 0 0 0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes floatUpDown {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-18px);
    }
  }

  .reveal-text {
    animation: revealText 0.8s ease-out forwards;
  }

  .fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .badge-animate {
    animation: fadeInUp 0.6s ease-out 0.1s forwards;
  }

  .heading-animate {
    animation: revealText 0.8s ease-out 0.2s forwards;
  }

  .paragraph-animate {
    animation: fadeInUp 0.6s ease-out 0.4s forwards;
  }

  .buttons-animate {
    animation: fadeInUp 0.6s ease-out 0.6s forwards;
  }

  .float-svg {
    animation: floatUpDown 3s ease-in-out infinite;
  }

  .float-svg-delayed {
    animation: floatUpDown 3.5s ease-in-out 0.5s infinite;
  }
`;

export function Hero() {
  return (
    <>
      <style>{animationStyles}</style>
      <div className="relative pt-24 md:pt-28 pb-20 flex flex-col items-center text-center px-4 md:px-14 max-w-6xl mx-auto w-full">

        {/* Left floating SVG */}
        <div className="block absolute left-0 xl:-left-4 top-[5%] md:top-[50%] pointer-events-none float-svg-delayed opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="150" viewBox="0 0 181 196" fill="none">
            <path d="M64.4225 22.3679L23.6188 27.0082C16.1071 27.8624 10.2068 34.6807 10.4403 42.2373L11.7084 83.2844C11.9419 90.8409 18.2206 96.2742 25.7323 95.42L66.536 90.7797C74.0477 89.9254 79.948 83.1071 79.7145 75.5506L78.4464 34.5035C78.2129 26.9469 71.9342 21.5136 64.4225 22.3679Z" stroke="#FA8072" strokeWidth="1.95553" />
            <path d="M99.481 52.7065L58.6774 57.3468C51.1656 58.2011 45.2654 65.0194 45.4989 72.5759L46.767 113.623C47.0005 121.18 53.2792 126.613 60.7909 125.759L101.595 121.118C109.106 120.264 115.007 113.446 114.773 105.889L113.505 64.8421C113.272 57.2856 106.993 51.8523 99.481 52.7065Z" stroke="#1F3C6B" strokeWidth="1.95553" />
            <path d="M134.541 83.0451L93.737 87.6854C86.2252 88.5397 80.325 95.358 80.5584 102.915L81.8266 143.962C82.06 151.518 88.3388 156.951 95.8505 156.097L136.654 151.457C144.166 150.603 150.066 143.784 149.833 136.228L148.565 95.1807C148.331 87.6242 142.052 82.1909 134.541 83.0451Z" stroke="#FF9DE3" strokeWidth="1.95553" />
          </svg>
        </div>

        {/* Right floating SVG */}
        <div className="block absolute right-0 xl:-right-4 top-[80%] md:top-[40%] pointer-events-none float-svg opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" width="148" height="152" viewBox="0 0 194 200" fill="none">
            <path d="M72.8984 12.3377L26.8527 10.5615C18.3759 10.2346 11.432 16.846 11.3431 25.3286L10.8603 71.4061C10.7714 79.8887 17.5711 87.0303 26.0479 87.3573L72.0937 89.1335C80.5705 89.4605 87.5143 82.849 87.6032 74.3664L88.0861 28.289C88.175 19.8063 81.3752 12.6647 72.8984 12.3377Z" stroke="#E5A647" strokeWidth="1.91999" />
            <path d="M110.867 52.2154L64.8214 50.4392C56.3446 50.1122 49.4008 56.7237 49.3119 65.2063L48.829 111.284C48.7401 119.766 55.5399 126.908 64.0167 127.235L110.062 129.011C118.539 129.338 125.483 122.727 125.572 114.244L126.055 68.1666C126.144 59.684 119.344 52.5424 110.867 52.2154Z" stroke="#58D5D3" strokeWidth="1.91999" />
            <path d="M148.836 92.0933L102.79 90.3172C94.3134 89.9902 87.3695 96.6016 87.2806 105.084L86.7978 151.162C86.7089 159.644 93.5086 166.786 101.985 167.113L148.031 168.889C156.508 169.216 163.452 162.605 163.541 154.122L164.024 108.045C164.112 99.5619 157.313 92.4203 148.836 92.0933Z" stroke="#FF9898" strokeWidth="1.91999" />
          </svg>
        </div>

        <div className="bg-[#FFEBE4] border border-gray-100 rounded-md px-4 py-2 mb-1 shadow-xs badge-animate">
          <p className="text-orange-500 text-[0.75rem] font-medium font-sans">
            Top Brands Trust Our Data Services!
          </p>
        </div>


        <h1 className="text-text-main text-3xl md:text-5xl lg:text-6xl font-black leading-relaxed max-w-4xl mb-4 font-header heading-animate ">
          Your Growth Starts With <span className="highlighted-text">Smarter</span> Marketing
        </h1>

        <p className="text-gray-600 text-sm  max-w-2xl mb-6 leading-relaxed md:leading-7 font-sans paragraph-animate">
          Our agency partners with forward-thinking companies to deliver tailored marketing solutions that boost visibility, elevate engagement, and drive measurable results across all channels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto buttons-animate">
          <AnimatedButton
            text="Contact Us"
            href="/contact"
            bgColor="var(--foreground)"
            hoverColor="var(--primary)"
            textColor="var(--background)"
            hoverTextColor="var(--background)"
            textColorChange
          />
          <AnimatedButton
            text="Learn More"
            href="/about"
            bgColor="slate-100"
            hoverColor="gray-800"
            textColor="gray-800"
            hoverTextColor="black"
            textColorChange={true}
          />


        </div>
      </div>
    </>
  );
}
