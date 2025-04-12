
// Function to create confetti effect
export const createConfetti = () => {
  const colors = ["#D946EF", "#33C3F0", "#FEC6A1", "#FFFFFF"];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti animate-confetti";
    
    // Random confetti appearance
    const size = Math.random() * 10 + 5;
    const shape = Math.random() > 0.5 ? "50%" : "0";
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random position and animation
    const left = Math.random() * 100;
    const animationDuration = Math.random() * 3 + 2;
    
    // Apply styles
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.borderRadius = shape;
    confetti.style.left = `${left}vw`;
    confetti.style.top = "-5vh";
    confetti.style.animationDuration = `${animationDuration}s`;
    
    // Add to body
    document.body.appendChild(confetti);
    
    // Remove after animation completes
    setTimeout(() => {
      confetti.remove();
    }, animationDuration * 1000);
  }
};
