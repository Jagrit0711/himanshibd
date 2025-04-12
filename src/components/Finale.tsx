
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Finale = () => {
  const [showSurprise, setShowSurprise] = useState<boolean>(false);
  
  const handleSurpriseClick = () => {
    // Play surprise sound
    const surpriseSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3");
    surpriseSound.volume = 0.3;
    surpriseSound.play().catch(() => console.log("Audio play failed"));
    
    setShowSurprise(true);
  };
  
  return (
    <div className="py-8 relative">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-press-start text-himanshi-blue glitch-text mb-4" data-text="The Archive Will Self-Destruct...">
          The Archive Will Self-Destruct...
        </h2>
        <p className="text-xl font-pixelify text-white opacity-80">
          Eventually
        </p>
      </div>
      
      <Card className="brutalist-box mx-auto max-w-3xl p-8">
        <div className="text-black space-y-6 text-center font-pixelify">
          <p className="text-xl md:text-2xl">
            This isn't a love letter.
          </p>
          
          <p className="text-lg md:text-xl">
            Just a very illegal appreciation file I made for your birthday.
          </p>
          
          <p className="text-lg md:text-xl">
            May the chaos continue. Happy 17th.
          </p>
          
          <div className="pt-6">
            {!showSurprise ? (
              <Button
                onClick={handleSurpriseClick}
                className="brutalist-box-yellow text-black px-6 py-4 text-lg font-bold animate-pulse"
              >
                One Last Surprise
              </Button>
            ) : (
              <div className="animate-scale-in">
                <div className="text-7xl mb-6">
                  🎁
                </div>
                <div className="brutalist-box-pink p-4">
                  <p className="text-lg font-bold">
                    Check your messages for a real surprise!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
      
      <div className="text-center mt-12">
        <p className="font-pixelify text-himanshi-yellow text-lg opacity-80">
          Made with ❤️, chaos, and sarcasm for Himanshi's 17th birthday
        </p>
      </div>
    </div>
  );
};

export default Finale;
