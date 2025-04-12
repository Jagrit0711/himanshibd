
import { useState } from "react";
import { Card } from "@/components/ui/card";

const memories = [
  {
    id: 1,
    title: "Operation Monica Ma'am",
    emoji: "💥",
    caption: "Steps to bunk the class: 'We have to go for computer practical.'",
    color: "pink"
  },
  {
    id: 2,
    title: "Rahul, Our Savior",
    emoji: "🧠",
    caption: "How to pass the test? Jagrit is doing 50% syllabus, I am doing 50%, rest we have Rahul.",
    color: "blue"
  },
  {
    id: 3,
    title: "Bluff Master",
    emoji: "🃏",
    caption: "Snatch Jagrit's cards, let me play the game.",
    color: "yellow"
  }
];

const MemoryArchive = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  
  const toggleCard = (id: number) => {
    // Play flip sound
    const flipSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2073/2073-preview.mp3");
    flipSound.volume = 0.3;
    flipSound.play().catch(() => console.log("Audio play failed"));
    
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter(cardId => cardId !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  };
  
  return (
    <div id="memories" className="py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-press-start text-himanshi-blue mb-4">
          The Himanshi Archives
        </h2>
        <p className="text-xl font-pixelify text-white opacity-80">
          (Classified Memories)
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {memories.map((memory) => (
          <div key={memory.id} className="card-container">
            <div 
              className={`card ${flippedCards.includes(memory.id) ? "flipped" : ""}`}
              onClick={() => toggleCard(memory.id)}
            >
              {/* Card Front */}
              <div className={`card-front bg-${memory.color === 'pink' ? 'himanshi-pink' : memory.color === 'blue' ? 'himanshi-blue' : 'himanshi-yellow'} p-6 flex flex-col items-center justify-center min-h-[250px] rounded-2xl border-4 border-black shadow-[5px_5px_0px_0px_#000]`}>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                  {memory.title}
                </h3>
                <div className="text-6xl animate-bounce-mild">
                  {memory.emoji}
                </div>
                <p className="mt-4 text-center text-black font-pixelify">
                  Click to reveal memory
                </p>
              </div>
              
              {/* Card Back */}
              <div className={`card-back bg-${memory.color === 'pink' ? 'himanshi-pink' : memory.color === 'blue' ? 'himanshi-blue' : 'himanshi-yellow'} p-6 flex flex-col items-center justify-center min-h-[250px] rounded-2xl border-4 border-black shadow-[5px_5px_0px_0px_#000]`}>
                <div className="text-5xl md:text-6xl mb-4">
                  {memory.emoji}
                </div>
                <p className="text-xl text-black font-pixelify text-center">
                  {memory.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryArchive;
