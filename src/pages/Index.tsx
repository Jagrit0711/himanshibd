
import { useEffect, useState, useRef } from "react";
import SplashScreen from "@/components/SplashScreen";
import BirthdayRoast from "@/components/BirthdayRoast";
import MemoryArchive from "@/components/MemoryArchive";
import HimanshiQuiz from "@/components/HimanshiQuiz";
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
    <HimanshiQuiz key="quiz" />,
    <SecretUnlock key="secret" isUnlocked={secretUnlocked} setUnlocked={setSecretUnlocked} />,
    <Finale key="finale" />
  ];

  useEffect(() => {
    if (hasEntered) {
      setCurrentSection(1);
      // Show welcoming toast when entering the app
      toast({
        title: "Happy Birthday Himanshi! 🎂",
        description: "Welcome to your chaotic birthday experience!",
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
    setCurrentSection(4);
    window.scrollTo(0, 0);
    toast({
      title: "Secret Unlocked! 🔓",
      description: "You found the secret message!",
      variant: "destructive",
      duration: 3000,
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black" ref={containerRef}>
      {/* Hidden easter egg button */}
      {hasEntered && currentSection !== 4 && (
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
                  className="brutalist-box-pink px-6 py-3 text-black font-bold"
                >
                  ← Previous Chaos
                </button>
              )}
              
              {currentSection < sections.length - 1 && (
                <button 
                  onClick={goToNextSection}
                  className={`brutalist-box-blue px-6 py-3 text-black font-bold ${currentSection === 1 ? "ml-auto" : ""}`}
                >
                  More Chaos →
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
