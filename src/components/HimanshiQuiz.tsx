
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const quizQuestions = [
  {
    question: "Which food does Himanshi eat when sad?",
    options: ["Chocolate", "Pani Puri", "Air"],
    correct: 0
  },
  {
    question: "What's Himanshi's favorite way to annoy people?",
    options: ["Talking non-stop", "Sending memes at 3 AM", "Stealing their food"],
    correct: 1
  },
  {
    question: "What would Himanshi do during a zombie apocalypse?",
    options: ["Hide and cry", "Become the zombie leader", "Survive with sarcasm"],
    correct: 2
  }
];

const HimanshiQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);
  
  const handleOptionSelect = (optionIndex: number) => {
    // Play selection sound
    const selectSound = new Audio("https://assets.mixkit.co/active_storage/sfx/650/650-preview.mp3");
    selectSound.volume = 0.3;
    selectSound.play().catch(() => console.log("Audio play failed"));
    
    setSelectedOption(optionIndex);
    
    // Auto submit after selection
    setTimeout(() => {
      handleSubmit();
    }, 500);
  };
  
  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    // Check if answer is correct
    if (selectedOption === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    // Show result briefly
    setShowResult(true);
    
    // Move to next question or show final result
    setTimeout(() => {
      setShowResult(false);
      setSelectedOption(null);
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizComplete(true);
        
        // Play completion sound
        const completeSound = new Audio("https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3");
        completeSound.volume = 0.3;
        completeSound.play().catch(() => console.log("Audio play failed"));
      }
    }, 1500);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-press-start text-himanshi-yellow text-center mb-8">
        The Himanshi IQ Test
      </h2>
      
      {!quizComplete ? (
        <Card className="brutalist-box p-6">
          {/* Question number */}
          <div className="mb-4 flex justify-between items-center">
            <span className="text-black text-lg font-bold">
              Question {currentQuestion + 1}/{quizQuestions.length}
            </span>
            <span className="text-black text-lg font-bold">
              Score: {score}
            </span>
          </div>
          
          {/* Question */}
          <h3 className="text-2xl text-black font-pixelify mb-6">
            {quizQuestions[currentQuestion].question}
          </h3>
          
          {/* Options */}
          <div className="space-y-4">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                className={`w-full justify-start text-left py-4 px-6 text-lg font-pixelify ${
                  selectedOption === index 
                    ? index === quizQuestions[currentQuestion].correct 
                      ? "bg-green-500 hover:bg-green-600 text-white" 
                      : "bg-red-500 hover:bg-red-600 text-white"
                    : "brutalist-box-blue text-black hover:bg-himanshi-blue/90"
                } ${showResult ? "pointer-events-none" : ""}`}
                disabled={showResult}
                onClick={() => handleOptionSelect(index)}
              >
                {String.fromCharCode(65 + index)}. {option}
              </Button>
            ))}
          </div>
          
          {/* Result message */}
          {showResult && (
            <div className="mt-6 text-center">
              <p className={`text-xl font-bold ${
                selectedOption === quizQuestions[currentQuestion].correct 
                  ? "text-green-500" 
                  : "text-red-500"
              }`}>
                {selectedOption === quizQuestions[currentQuestion].correct 
                  ? "Correct! You know Himanshi well!" 
                  : "Wrong! Are you even friends?"}
              </p>
            </div>
          )}
        </Card>
      ) : (
        <div className="brutalist-box p-8 text-center animate-scale-in">
          <h3 className="text-2xl md:text-3xl text-black font-pixelify mb-6">
            {score === quizQuestions.length 
              ? "Correct! You are Himanshi. Or at least Himanshi-coded." 
              : `Score: ${score}/${quizQuestions.length} - You kinda know Himanshi!`}
          </h3>
          
          <div className="text-6xl mb-6">
            {score === quizQuestions.length ? "🏆" : "🎯"}
          </div>
          
          <p className="text-xl text-black font-press-start">
            YOU PASSED. Barely. Now move on.
          </p>
        </div>
      )}
    </div>
  );
};

export default HimanshiQuiz;
