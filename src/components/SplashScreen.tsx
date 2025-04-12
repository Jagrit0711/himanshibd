
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface SplashScreenProps {
  onEnter: () => void;
}

const SplashScreen = ({ onEnter }: SplashScreenProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showEnter, setShowEnter] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(true);
  const [loadingText, setLoadingText] = useState<string>("Verifying Awesomeness...");
  const [glitch, setGlitch] = useState<boolean>(false);

  // Create flashing lights
  const flashingLights = Array.from({ length: 30 }).map((_, i) => {
    const colors = ["#D946EF", "#33C3F0", "#FEC6A1"];
    const size = Math.random() * 100 + 50;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 2;
    return (
      <div
        key={i}
        className="flashing-light"
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  // Loading and verification sequence
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      setGlitch(true);
      setLoadingText("ACCESS GRANTED — Himanshi, Enter.");
      
      // Play glitch sound
      const glitchSound = new Audio("https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3");
      glitchSound.volume = 0.3;
      glitchSound.play().catch(() => console.log("Audio play failed"));
      
      const enterTimeout = setTimeout(() => {
        setShowEnter(true);
        setShowWarning(false);
      }, 2000);
      
      return () => clearTimeout(enterTimeout);
    }, 3000);
    
    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleEnter = () => {
    // Play click sound
    const clickSound = new Audio("https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3");
    clickSound.volume = 0.3;
    clickSound.play().catch(() => console.log("Audio play failed"));
    
    onEnter();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Flashing lights background */}
      <div className="flashing-lights">{flashingLights}</div>
      
      {/* Warning text */}
      {showWarning && (
        <div className="text-center mb-10 animate-pulse">
          <h1 className="text-4xl md:text-6xl font-press-start text-himanshi-pink mb-4">
            WARNING
          </h1>
          <p className="text-2xl md:text-4xl font-vt323 text-white">
            17-Year-Old Detected
          </p>
        </div>
      )}
      
      {/* Loading verification */}
      <div className="brutalist-box px-8 py-6 w-11/12 max-w-lg text-center my-6">
        <p className={`text-xl md:text-2xl font-vt323 text-black ${loading ? "animate-pulse" : ""} ${glitch ? "glitch-text" : ""}`} data-text={loadingText}>
          {loadingText}
        </p>
        
        {loading && (
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-himanshi-black rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Enter button */}
      {showEnter && (
        <Button
          onClick={handleEnter}
          className="brutalist-box-blue text-black font-bold text-lg md:text-xl mt-6 px-8 py-6 font-press-start animate-bounce-mild"
        >
          Tap to Enter Chaos
        </Button>
      )}
    </div>
  );
};

export default SplashScreen;
