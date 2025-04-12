
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Music, Stars, Sparkles } from "lucide-react";

interface SecretUnlockProps {
  isUnlocked: boolean;
  setUnlocked: (value: boolean) => void;
}

const SecretUnlock = ({ isUnlocked, setUnlocked }: SecretUnlockProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  const playMessage = () => {
    setIsPlaying(true);
    
    // Play secret message sound
    const messageSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2301/2301-preview.mp3");
    messageSound.volume = 0.5;
    messageSound.play().catch(() => console.log("Audio play failed"));
    
    setTimeout(() => {
      setIsPlaying(false);
    }, 5000);
  };
  
  // Create floating decorative elements
  const floatingElements = Array.from({ length: 20 }).map((_, i) => {
    const colors = ["#FFD6EC", "#FFB6C1", "#FEC6A1"];
    const size = Math.random() * 60 + 20;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 1.5;
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
          borderRadius: "50%",
        }}
      />
    );
  });
  
  return (
    <div className="py-12 relative">
      {/* Floating background elements */}
      <div className="flashing-lights">{floatingElements}</div>
      
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-pixelify text-pink-400 mb-4">
          Secret Message
        </h2>
        <p className="text-xl font-pixelify text-white opacity-80">
          You found the hidden chocolate! 🍫
        </p>
      </div>
      
      <Card className="mx-auto max-w-2xl p-8 bg-gradient-to-br from-pink-100 to-white rounded-3xl border-4 border-pink-300 shadow-[8px_8px_0px_0px_rgba(236,72,153,0.3)] relative z-10">
        <div className="text-black">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4 animate-bounce-mild">
              {isPlaying ? "🎵" : "💌"}
            </div>
            <h3 className="text-2xl font-bold mb-4 font-pixelify text-pink-500">
              A Secret Message For You
            </h3>
          </div>
          
          <div className="space-y-4 text-center">
            {!isPlaying ? (
              <button
                onClick={playMessage}
                className="bg-pink-400 text-white px-6 py-3 font-bold text-lg rounded-full border-2 border-pink-500 shadow-[5px_5px_0px_0px_rgba(236,72,153,0.3)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(236,72,153,0.3)] transition-all"
              >
                Play Secret Message
              </button>
            ) : (
              <div className="animate-pulse">
                <p className="text-xl">Playing message...</p>
                <div className="flex justify-center gap-2 mt-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            
            <div className={isPlaying ? "block animate-scale-in" : "hidden"}>
              <p className="text-lg md:text-xl mt-6 font-pixelify text-pink-500">
                "To the girl whose laugh makes everything better — your chaos, stories, and friendship have made some of the best memories. Just grateful for all of it."
              </p>
            </div>
            
            <div className="mt-8 text-lg">
              <p className="font-pixelify text-gray-700">
                Here's to the girl who makes chemistry bearable and chaos enjoyable. Your laughter, your stories, and your friendship make every day better.
              </p>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 left-1/4 text-5xl animate-bounce-mild" style={{animationDuration: "4s"}}>
        ✨
      </div>
      <div className="absolute top-20 right-1/4 text-5xl animate-bounce-mild" style={{animationDuration: "3.5s"}}>
        💕
      </div>
    </div>
  );
};

export default SecretUnlock;
