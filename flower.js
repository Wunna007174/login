onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  let heartCount = 0; // Initialize counter

  // Create a counter display
  const counterDisplay = document.createElement("div");
  counterDisplay.style.position = "fixed";
  counterDisplay.style.top = "10px";
  counterDisplay.style.right = "10px";
  counterDisplay.style.background = "rgba(0, 0, 0, 0.7)";
  counterDisplay.style.color = "white";
  counterDisplay.style.padding = "10px 15px";
  counterDisplay.style.fontSize = "18px";
  counterDisplay.style.borderRadius = "8px";
  counterDisplay.style.zIndex = "1000";
  counterDisplay.innerText = `Hearts: ${heartCount}`;
  document.body.appendChild(counterDisplay);
  
  // Create "Rain Hearts" button
  const rainButton = document.createElement("button");
  rainButton.innerText = "Rain Hearts";
  rainButton.style.position = "fixed";
  rainButton.style.bottom = "10px";
  rainButton.style.right = "10px";
  rainButton.style.padding = "10px 20px";
  rainButton.style.fontSize = "16px";
  rainButton.style.background = "red";
  rainButton.style.color = "white";
  rainButton.style.border = "none";
  rainButton.style.borderRadius = "8px";
  rainButton.style.cursor = "pointer";
  rainButton.style.zIndex = "1000";
  document.body.appendChild(rainButton);
  
  document.addEventListener("click", (event) => {
    heartCount++; // Increase heart count
    counterDisplay.innerText = `Hearts: ${heartCount}`; // Update display
  
    const heart = document.createElement("div");
  
    // Set heart styles
    heart.style.position = "absolute";
    heart.style.width = "30px";  
    heart.style.height = "30px";
    heart.style.background = "red";
    heart.style.left = `${event.pageX}px`;
    heart.style.top = `${event.pageY}px`;
    heart.style.pointerEvents = "none"; 
    heart.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 30 - 15}deg)`;
    heart.style.clipPath = "path('M24 8.667c0-4-3.2-6.667-6.667-6.667C14.133 2 12 4.667 12 4.667S9.867 2 6.667 2C3.2 2 0 4.667 0 8.667 0 15.2 12 22 12 22s12-6.8 12-13.333z')";
    heart.style.opacity = "1";
    heart.style.transition = "transform 1s ease-out, opacity 1s ease-out";
    
    document.body.appendChild(heart);
  
    // Animate heart
    setTimeout(() => {
      heart.style.transform = `translate(-50%, -120px) scale(1.2)`;
      heart.style.opacity = "0";
    }, 10);
  
    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 1000);
  });
  
  // Function to generate a random color
  function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`; // Random hue for vibrant colors
  }
  
  // Function to create falling hearts
  function rainHearts() {
    for (let i = 0; i < heartCount; i++) {
      setTimeout(() => {
        const fallingHeart = document.createElement("div");
        fallingHeart.style.position = "absolute";
        fallingHeart.style.width = "30px";  
        fallingHeart.style.height = "30px";
        fallingHeart.style.background = getRandomColor(); // Random color
        fallingHeart.style.left = `${Math.random() * window.innerWidth}px`; // Random X position
        fallingHeart.style.top = "-30px"; // Start above the screen
        fallingHeart.style.pointerEvents = "none"; 
        fallingHeart.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        fallingHeart.style.clipPath = "path('M24 8.667c0-4-3.2-6.667-6.667-6.667C14.133 2 12 4.667 12 4.667S9.867 2 6.667 2C3.2 2 0 4.667 0 8.667 0 15.2 12 22 12 22s12-6.8 12-13.333z')";
        fallingHeart.style.transition = "top 3s linear, opacity 3s ease";
        fallingHeart.style.opacity = "1";
        
        document.body.appendChild(fallingHeart);
  
        // Animate falling
        setTimeout(() => {
          fallingHeart.style.top = `${window.innerHeight}px`; // Move to bottom
          fallingHeart.style.opacity = "0";
        }, 10);
  
        // Remove heart after animation
        setTimeout(() => {
          fallingHeart.remove();
        }, 3000);
      }, i * 100); // Stagger falling effect
    }
  
    // Reset heart count after raining
    heartCount = 0;
    counterDisplay.innerText = `Hearts: ${heartCount}`;
  }
  
  // Attach function to button click
  rainButton.addEventListener("click", rainHearts);
  