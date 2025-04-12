
import { useEffect, useState, useRef } from "react";
import SplashScreen from "@/components/SplashScreen";
import BirthdayRoast from "@/components/BirthdayRoast";
import MemoryArchive from "@/components/MemoryArchive";
import SecretUnlock from "@/components/SecretUnlock";
import Finale from "@/components/Finale";
import CountdownTimer from "@/components/CountdownTimer";
import { useToast } from "@/components/ui/use-toast";
import { createConfetti } from "@/utils/confetti";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [secretUnlocked, setSecretUnlocked] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const sections = [
    <SplashScreen key="splash" onEnter={() => setHasEntered(true)} />,
    <BirthdayRoast key="roast" createConfetti={createConfetti} />,
    <MemoryArchive key="memories" />,
    <SecretUnlock key="secret" isUnlocked={secretUnlocked} setUnlocked={setSecretUnlocked} />,
    <Finale key="finale" />
  ];

  useEffect(() => {
    if (hasEntered) {
      setCurrentSection(1);
      // Show welcoming toast when entering the app
      toast({
        title: "Happy Birthday Himanshi! 🎂",
        description: "Welcome to your cute birthday experience!",
        duration: 5000,
      });
    }
  }, [hasEntered, toast]);

  const goToNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPrevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const revealSecret = () => {
    setSecretUnlocked(true);
    setCurrentSection(3); // Updated index since we removed HimanshiQuiz
    window.scrollTo(0, 0);
    toast({
      title: "Secret Unlocked! 🔓",
      description: "You found the secret message!",
      variant: "destructive",
      duration: 3000,
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-black to-purple-900" ref={containerRef}>
      {/* Hidden easter egg button */}
      {hasEntered && currentSection !== 3 && (
        <div 
          className="fixed bottom-2 right-2 w-10 h-10 z-50 opacity-20 hover:opacity-100 transition-opacity"
          onClick={revealSecret}
        >
          <span className="text-himanshi-yellow text-2xl">🍫</span>
        </div>
      )}
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-6">
        {currentSection === 0 && sections[0]}
        
        {currentSection > 0 && (
          <>
            <div className="mt-4">
              {sections[currentSection]}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-10 mb-16">
              {currentSection > 1 && (
                <button 
                  onClick={goToPrevSection}
                  className="bg-himanshi-pink text-black px-6 py-3 rounded-xl border-4 border-black shadow-[5px_5px_0px_0px_#000] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all font-bold"
                >
                  ← Previous
                </button>
              )}
              
              {currentSection < sections.length - 1 && (
                <button 
                  onClick={goToNextSection}
                  className={`bg-himanshi-blue text-white px-6 py-3 rounded-xl border-4 border-black shadow-[5px_5px_0px_0px_#000] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all font-bold ${currentSection === 1 ? "ml-auto" : ""}`}
                >
                  Next →
                </button>
              )}
            </div>
            
            {/* Countdown timer */}
            <div className="fixed bottom-4 left-4 z-50">
              <CountdownTimer nextBirthday="2026-04-12" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
