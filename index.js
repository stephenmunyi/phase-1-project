
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Get the form data
        const formData = new FormData(event.target);
    
        // Create an object to hold the form values
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });
         // Save user data to local storage
         localStorage.setItem('userData', JSON.stringify(userData));
    
         // Display registration message
         document.getElementById('registration-message').textContent = "Registration successful. Welcome, " + userData.username + "!";
    
         // Clear the form fields (optional)
         event.target.reset();
     });
      



    
    function performSearch(query) {
        const searchResultsContainer = document.getElementById('search-results-container');
        searchResultsContainer.innerHTML = ''; // Clear previous search results
    
        // Perform search 
        const url ='http://localhost:3000/lights'
        fetch('http://localhost:3000/lights')  // Corrected URL format
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display search results
            data.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.classList.add('search-result-container');
                resultElement.textContent = 
                searchResultsContainer.appendChild(resultElement);
            });
        })
        .catch(error => {
            alert('There was a problem with your fetch operation');
        });
    }


const defaultSearchQuery = "Default Search Query";
document.getElementById('search-input').value = '';

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    performSearch(query);
});

function performSearch(query) {
    // Simulated search results 
    const searchResults = [
       { id: 1, name: "Jdian SolarLight", description: "brightness" },
        { id: 2, name: "Jdian Solar" },
         { id: 3, name: " Jdian  Light" },
         { id: 4, name: "Jdian "},
         { id: 5, name: "High Bay ac ceiling light" },
         { id: 6, name: "solar pannel" },
         { id: 7, name: "solar wall light" },
         { id: 8, name: "solar wall lamp" },
         { id: 9, name: "solar battrey" },
        { id: 10,name: "solar home kit"}
    ];

    const filteredResults = searchResults.filter(result => 
        result.name.toLowerCase().includes(query.toLowerCase()) || 
        result.description.toLowerCase().includes(query.toLowerCase())
    );

    displaySearchResults(searchResults);
}
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results-container');
    searchResultsContainer.innerHTML = ''; // Clear previous search results

    const searchQueryElement = document.createElement('div');
    searchQueryElement.textContent = `Search results for: ${document.getElementById('search-input').value}`;
    searchResultsContainer.appendChild(searchQueryElement);

    // Loop through each search result object
    results.forEach(result => {
        // Create a div to contain the result object
        const resultElement = document.createElement('div');
        resultElement.classList.add('search-result');

        // Create a heading for the result object
        const heading = document.createElement('h3');
        heading.textContent = result.name;
        resultElement.appendChild(heading);

      // Create a paragraph for the result description
      const descriptionParagraph = document.createElement('p');
      descriptionParagraph.textContent = result.description;
      resultElement.appendChild(descriptionParagraph);

      // Append the result element to the search results container
      searchResultsContainer.appendChild(resultElement);
  });
}



function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results-container');
    searchResultsContainer.innerHTML = ''; // Clear previous search results

    // Create and append HTML elements for each search result
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('search-result');
        resultElement.textContent = result.name;
        searchResultsContainer.appendChild(resultElement);
    });
}








// Event listener for the search button
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    performSearch(query);
});



    
document.getElementById('pay-button').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    makePayment(amount);
});

function makePayment(amount) {
    // Simulate payment processing 
    const paymentSuccessful = Math.random() < 0.8; // 80% chance of success

    if (paymentSuccessful) {
        displayPaymentStatus('Payment successful. Amount paid: $' + amount);
    } else {
        displayPaymentStatus('Payment failed. Please try again later.');
    }
}

function displayPaymentStatus(message) {
    const paymentStatusElement = document.getElementById('payment-status');
    paymentStatusElement.textContent = message;
}