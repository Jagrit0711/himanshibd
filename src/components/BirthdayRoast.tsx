
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface BirthdayRoastProps {
  createConfetti: () => void;
}

const BirthdayRoast = ({ createConfetti }: BirthdayRoastProps) => {
  const [showCake, setShowCake] = useState<boolean>(false);
  const [cakeExploded, setCakeExploded] = useState<boolean>(false);
  const [spotifyPlayed, setSpotifyPlayed] = useState<boolean>(false);
  
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
      
      setTimeout(() => setCakeExploded(false), 2000);
    }
  };
  
  const playSpotify = () => {
    setSpotifyPlayed(true);
  };
  
  return (
    <div className="flex flex-col items-center">
      {/* Birthday intro with cute text */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-press-start text-himanshi-pink text-center mb-8" 
          style={{textShadow: "3px 3px 0px #FEC6A1"}}>
        YOU WERE A CHILD.
      </h1>
      
      <div className="mb-10 max-w-2xl mx-auto">
        <p className="text-2xl md:text-3xl font-pixelify text-white text-center mb-4">
          you are 17 now ??? damn ur 5 foot
        </p>
      </div>
      
      {/* Interactive buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <Button
          onClick={handleCakeClick}
          className={`bg-himanshi-pink text-white border-4 border-black rounded-xl shadow-[5px_5px_0px_0px_#000] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all text-xl font-bold py-6 ${showCake && cakeExploded ? "animate-shake" : ""}`}
        >
          Give me cake
        </Button>
        
        <Button
          onClick={playSpotify}
          className={`bg-himanshi-yellow text-black border-4 border-black rounded-xl shadow-[5px_5px_0px_0px_#000] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all text-xl font-bold py-6 ${spotifyPlayed ? "animate-bounce-mild" : ""}`}
        >
          Play my anthem
        </Button>
        
        <Button
          className="bg-himanshi-blue text-white border-4 border-black rounded-xl shadow-[5px_5px_0px_0px_#000] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all text-xl font-bold py-6"
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
          <p className="text-xl text-himanshi-yellow font-bold">
            {cakeExploded ? "i ant sending it i dont want u to get diabetees" : "Click the cake for a surprise!"}
          </p>
          {cakeExploded && (
            <p className="text-md text-himanshi-pink mt-2 font-pixelify italic">
              ps i am broke
            </p>
          )}
        </div>
      )}
      
      {/* Spotify embed */}
      {spotifyPlayed && (
        <div className="mt-6 w-full max-w-xl animate-scale-in">
          <iframe 
            style={{borderRadius: "12px"}} 
            src="https://open.spotify.com/embed/track/0eLtIxPRNJfsmehITZ1qaJ?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default BirthdayRoast;
