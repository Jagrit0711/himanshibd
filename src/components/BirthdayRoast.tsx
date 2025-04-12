
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface BirthdayRoastProps {
  createConfetti: () => void;
}

const BirthdayRoast = ({ createConfetti }: BirthdayRoastProps) => {
  const [showCake, setShowCake] = useState<boolean>(false);
  const [cakeExploded, setCakeExploded] = useState<boolean>(false);
  const [anthemPlayed, setAnthemPlayed] = useState<boolean>(false);
  
  const handleCakeClick = () => {
    if (!showCake) {
      setShowCake(true);
      createConfetti();
      return;
    }
    
    if (!cakeExploded) {
      setCakeExploded(true);
      // Play explosion sound
      const explosionSound = new Audio("https://assets.mixkit.co/active_storage/sfx/1990/1990-preview.mp3");
      explosionSound.volume = 0.3;
      explosionSound.play().catch(() => console.log("Audio play failed"));
      
      // Create cake explosion
      createConfetti();
      createConfetti();
      createConfetti();
      
      setTimeout(() => setCakeExploded(false), 2000);
    }
  };
  
  const playAnthem = () => {
    // Play funny anthem sound
    const anthem = new Audio("https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3");
    anthem.volume = 0.3;
    anthem.play().catch(() => console.log("Audio play failed"));
    
    setAnthemPlayed(true);
    setTimeout(() => setAnthemPlayed(false), 3000);
  };
  
  return (
    <div className="flex flex-col items-center">
      {/* Birthday intro with giant text */}
      <h1 className="glitch-text text-4xl md:text-6xl lg:text-7xl font-press-start text-himanshi-pink text-center mb-8" data-text="YOU WERE A CHILD.">
        YOU WERE A CHILD.
      </h1>
      
      <div className="mb-10 max-w-2xl mx-auto">
        <p className="text-2xl md:text-3xl font-pixelify text-white text-center mb-4">
          Now you're 17 and still addicted to chocolate and chaos.
        </p>
      </div>
      
      {/* Interactive buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <Button
          onClick={handleCakeClick}
          className={`brutalist-box-yellow text-black text-xl font-bold py-6 ${showCake && cakeExploded ? "animate-shake" : ""}`}
        >
          Give me cake
        </Button>
        
        <Button
          onClick={playAnthem}
          className={`brutalist-box-pink text-black text-xl font-bold py-6 ${anthemPlayed ? "animate-bounce-mild" : ""}`}
        >
          Play my anthem
        </Button>
        
        <Button
          className="brutalist-box-blue text-black text-xl font-bold py-6"
          onClick={() => {
            const element = document.getElementById("memories");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          What's next?
        </Button>
      </div>
      
      {/* Cake and explosion effects */}
      {showCake && (
        <div className={`mt-10 text-center ${cakeExploded ? "animate-shake" : "animate-scale-in"}`}>
          <div className="text-7xl md:text-9xl mb-4 cursor-pointer" onClick={handleCakeClick}>
            🎂
          </div>
          <p className="text-xl text-himanshi-yellow">
            {cakeExploded ? "BOOM! Cake everywhere!" : "Click the cake for a surprise!"}
          </p>
        </div>
      )}
      
      {/* Anthem message */}
      {anthemPlayed && (
        <div className="mt-6 brutalist-box-pink p-4 animate-scale-in">
          <p className="text-black text-lg font-bold">
            "Chocolate, chaos, and being awesome - that's my anthem!"
          </p>
        </div>
      )}
    </div>
  );
};

export default BirthdayRoast;
