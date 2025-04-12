
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
        <h2 className="text-3xl md:text-5xl font-press-start text-blue-400 mb-4">
          The Archive Will Self-Destruct...
        </h2>
        <p className="text-xl font-pixelify text-white opacity-80">
          Eventually
        </p>
      </div>
      
      <Card className="mx-auto max-w-3xl p-8 bg-white rounded-2xl border-4 border-black shadow-[5px_5px_0px_0px_#000]">
        <div className="text-black space-y-6 text-center font-pixelify">
          <p className="text-xl md:text-2xl">
            This isn't a love letter.
          </p>
          
          <p className="text-lg md:text-xl">
            Just a very illegal appreciation file I made for your birthday.
          </p>
          
          <p className="text-lg md:text-xl">
            May the cuteness continue. Happy 17th.
          </p>
          
          <div className="pt-6">
            {!showSurprise ? (
              <Button
                onClick={handleSurpriseClick}
                className="bg-yellow-300 text-black px-6 py-4 text-lg font-bold animate-pulse rounded-xl border-4 border-black shadow-[5px_5px_0px_0px_#000] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all"
              >
                One Last Surprise
              </Button>
            ) : (
              <div className="animate-scale-in">
                {/* Image with decorations */}
                <div className="relative inline-block mb-8 max-w-md">
                  <div className="absolute -top-6 -left-6 text-5xl animate-bounce" style={{animationDuration: "3s"}}>
                    🎂
                  </div>
                  <div className="absolute -top-6 -right-6 text-5xl animate-bounce" style={{animationDuration: "2.5s"}}>
                    🎉
                  </div>
                  <div className="absolute -bottom-6 -left-6 text-5xl animate-bounce" style={{animationDuration: "3.2s"}}>
                    🎊
                  </div>
                  <div className="absolute -bottom-6 -right-6 text-5xl animate-bounce" style={{animationDuration: "2.8s"}}>
                    🎂
                  </div>
                  <img 
                    src="/lovable-uploads/c4f8ab1c-13c7-4ad3-bafd-571882fd5ee2.png" 
                    alt="Himanshi" 
                    className="border-4 border-black rounded-xl shadow-[5px_5px_0px_0px_#000]"
                  />
                </div>
                
                <div className="text-7xl mb-6">
                  🎁
                </div>
                <div className="bg-pink-400 p-4 rounded-xl border-4 border-black shadow-[5px_5px_0px_0px_#000]">
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
        <p className="font-pixelify text-yellow-300 text-lg opacity-80">
          Made with ❤️, cuteness, and love for Himanshi's 17th birthday
        </p>
      </div>
    </div>
  );
};

export default Finale;
