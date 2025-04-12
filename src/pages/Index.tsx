
import { useEffect, useState, useRef } from "react";
import SplashScreen from "@/components/SplashScreen";
import BirthdayRoast from "@/components/BirthdayRoast";
import MemoryArchive from "@/components/MemoryArchive";
import SecretUnlock from "@/components/SecretUnlock";
import Finale from "@/components/Finale";
import CountdownTimer from "@/components/CountdownTimer";
import { useToast } from "@/components/ui/use-toast";
import { createConfetti } from "@/utils/confetti";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [secretUnlocked, setSecretUnlocked] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

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
    setCurrentSection(3);
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
      {/* Hidden easter egg button - made smaller and more subtle on mobile */}
      {hasEntered && currentSection !== 3 && (
        <div 
          className="fixed bottom-2 right-2 w-8 md:w-10 h-8 md:h-10 z-50 opacity-20 hover:opacity-100 transition-opacity"
          onClick={revealSecret}
        >
          <span className="text-himanshi-yellow text-xl md:text-2xl">🍫</span>
        </div>
      )}
      
      {/* Main content */}
      <div className="container mx-auto px-3 md:px-4 py-4 md:py-6">
        {currentSection === 0 && sections[0]}
        
        {currentSection > 0 && (
          <>
            <div className="mt-2 md:mt-4">
              {sections[currentSection]}
            </div>
            
            {/* Navigation buttons - responsive sizing */}
            <div className="flex justify-between mt-6 md:mt-10 mb-12 md:mb-16 px-2">
              {currentSection > 1 && (
                <button 
                  onClick={goToPrevSection}
                  className="bg-himanshi-pink text-black px-4 md:px-6 py-2 md:py-3 rounded-xl border-3 md:border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_#000] transition-all font-bold text-sm md:text-base"
                >
                  ← Previous
                </button>
              )}
              
              {currentSection < sections.length - 1 && (
                <button 
                  onClick={goToNextSection}
                  className={`bg-himanshi-blue text-white px-4 md:px-6 py-2 md:py-3 rounded-xl border-3 md:border-4 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_#000] transition-all font-bold text-sm md:text-base ${currentSection === 1 ? "ml-auto" : ""}`}
                >
                  Next →
                </button>
              )}
            </div>
            
            {/* Countdown timer - adjusted for mobile */}
            <div className="fixed bottom-2 md:bottom-4 left-2 md:left-4 z-50 scale-75 md:scale-100 origin-bottom-left">
              <CountdownTimer nextBirthday="2026-04-12" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
