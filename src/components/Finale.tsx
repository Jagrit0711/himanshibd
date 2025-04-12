
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cake, PartyPopper, Heart, Gift, Star } from "lucide-react";

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
        <h2 className="text-3xl md:text-5xl font-pixelify text-blue-400 mb-4">
          The Archive Will Self-Destruct...
        </h2>
        <p className="text-xl font-pixelify text-white opacity-80">
          Eventually
        </p>
      </div>
      
      <Card className="mx-auto max-w-3xl p-8 bg-gradient-to-br from-pink-100 to-white rounded-3xl border-4 border-pink-300 shadow-[8px_8px_0px_0px_rgba(236,72,153,0.3)]">
        <div className="text-black space-y-6 text-center font-pixelify">
          <p className="text-xl md:text-2xl text-pink-500">
            This isn't a love letter.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700">
            Just a very illegal appreciation file I made for your birthday.
          </p>
          
          <p className="text-lg md:text-xl text-pink-500">
            May the cuteness continue. Happy 17th.
          </p>
          
          <div className="pt-6">
            {!showSurprise ? (
              <Button
                onClick={handleSurpriseClick}
                className="bg-yellow-300 text-black px-6 py-4 text-lg font-bold animate-pulse rounded-full border-2 border-yellow-400 shadow-[5px_5px_0px_0px_rgba(250,204,21,0.3)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(250,204,21,0.3)] transition-all"
              >
                <Gift className="mr-2 h-5 w-5" /> One Last Surprise
              </Button>
            ) : (
              <div className="animate-scale-in">
                {/* Image with decorations */}
                <div className="relative inline-block mb-8 max-w-md">
                  <div className="absolute -top-6 -left-6 text-5xl animate-bounce" style={{animationDuration: "3s"}}>
                    <Cake className="h-10 w-10 text-pink-500" />
                  </div>
                  <div className="absolute -top-6 -right-6 text-5xl animate-bounce" style={{animationDuration: "2.5s"}}>
                    <PartyPopper className="h-10 w-10 text-yellow-400" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 text-5xl animate-bounce" style={{animationDuration: "3.2s"}}>
                    <Star className="h-10 w-10 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 text-5xl animate-bounce" style={{animationDuration: "2.8s"}}>
                    <Heart className="h-10 w-10 text-pink-500" />
                  </div>
                  <img 
                    src="/lovable-uploads/c4f8ab1c-13c7-4ad3-bafd-571882fd5ee2.png" 
                    alt="Himanshi" 
                    className="border-4 border-pink-300 rounded-xl shadow-[5px_5px_0px_0px_rgba(236,72,153,0.3)]"
                  />
                </div>
                
                <div className="text-7xl mb-6">
                  🎁
                </div>
                <div className="bg-pink-400 p-4 rounded-full border-2 border-pink-500 shadow-[5px_5px_0px_0px_rgba(236,72,153,0.3)]">
                  <p className="text-lg font-bold text-white">
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
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce-mild" style={{animationDuration: "3.7s"}}>
        ✨
      </div>
      <div className="absolute bottom-40 right-10 text-4xl animate-bounce-mild" style={{animationDuration: "4.2s"}}>
        💝
      </div>
    </div>
  );
};

export default Finale;
