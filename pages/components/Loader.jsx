import React, { useEffect, useState, useRef } from "react";
import gsap from 'gsap';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if loader has been shown before
    if (sessionStorage.getItem('loaderShown')) {
      setIsLoading(false);
      return;
    }

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial mobile state
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Start video playback programmatically
    if (videoRef.current) {
      // Try to play the video immediately
      const playPromise = videoRef.current.play();
      
      // Handle potential play() promise rejection (happens on some mobile browsers)
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Auto-play was prevented. This is normal on some devices.", error);
        });
      }
    }

    // Animate loader sliding up after delay
    const timer = setTimeout(() => {
      gsap.to(".loading", {
        duration: 1,
        y: "-100%", 
        ease: "power3.inOut",
        onComplete: () => {
          setIsLoading(false);
          sessionStorage.setItem('loaderShown', 'true');
        }
      });
    }, 2500); // Match video duration

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#fafafb] z-[9999] flex items-center justify-center loading">
      <div className="flex flex-col items-center px-4">
        {isMobile ? (
          <div className="w-[100px] h-[100px] border-4 border-yellow-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover"
          >
            <source src="/images/loader.mp4" type="video/mp4" />
          </video>
        )}
        <p className="text-lg sm:text-xl font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
