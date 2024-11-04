function showActionFeedback() {
    const action = document.getElementById('action').value;
    const feedback = document.getElementById('feedback');
    if (action === "reduce-emissions") {
      feedback.innerHTML = `
        <h4>How to Reduce Carbon Emissions:</h4>
        <ul>
          <li>Switch to energy-efficient appliances.</li>
          <li>Use public transport, bike, or walk.</li>
          <li>Minimize air travel and opt for carbon offset programs.</li>
        </ul>
        <p><a href="resources.html#emissions" class="btn btn-primary">Learn More</a></p>
      `;
    } else if (action === "plant-trees") {
      feedback.innerHTML = `
        <h4>Get Involved in Tree Planting:</h4>
        <p>Join local or global initiatives to help restore forests and combat climate change.</p>
        <p><a href="https://onetreeplanted.org/" class="btn btn-success">One Tree Planted</a></p>
      `;
    } else if (action === "use-renewables") {
      feedback.innerHTML = `
        <h4>Switch to Renewable Energy:</h4>
        <p>Find green energy providers or learn about installing solar panels for your home.</p>
        <p><a href="resources.html#renewables" class="btn btn-warning">Explore Renewable Energy Options</a></p>
      `;
    } else {
      feedback.textContent = "Please select an action.";
    }
  }