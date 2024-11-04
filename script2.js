function showActionFeedback() {
    const action = document.getElementById('action').value;
    let feedback = '';
  
    if (action === 'reduce-emissions') {
      feedback = 'Great! Reducing emissions is a key step in fighting climate change.';
    } else if (action === 'plant-trees') {
      feedback = 'Awesome! Planting trees helps absorb carbon and improve air quality.';
    } else if (action === 'use-renewables') {
      feedback = 'Excellent choice! Renewable energy reduces our reliance on fossil fuels.';
    }
  
    document.getElementById('feedback').innerText = feedback;
  }
  
  // Simulated live chat feature
  function sendMessage() {
    let chatWindow = document.getElementById('chat-window');
    let userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
      let userMessage = document.createElement('p');
      userMessage.textContent = `You: ${userInput}`;
      chatWindow.appendChild(userMessage);
  
      let botResponse = document.createElement('p');
      botResponse.textContent = `Bot: Thank you for your question! We are here to help.`;
      chatWindow.appendChild(botResponse);
  
      chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom
      document.getElementById('userInput').value = ''; // Clear input field
    }
  }
  
  // script.js
  
  // Function to send and display user and bot messages
  function sendMessage() {
      const chatWindow = document.getElementById('chat-window');
      const userInput = document.getElementById('userInput').value.trim();
    
      if (userInput === '') return;
    
      // Display user message
      const userMessage = document.createElement('p');
      userMessage.classList.add('user-message');
      userMessage.textContent = `You: ${userInput}`;
      chatWindow.appendChild(userMessage);
    
      // Clear input field
      document.getElementById('userInput').value = '';
    
      // Process user input and generate bot response
      const botResponse = generateBotResponse(userInput);
      setTimeout(() => {
        const botMessage = document.createElement('p');
        botMessage.classList.add('bot-response');
        botMessage.textContent = `Bot: ${botResponse}`;
        chatWindow.appendChild(botMessage);
    
        // Auto-scroll to the bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 500); // Short delay for realism
    }