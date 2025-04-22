document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const dish = document.getElementById('search-input').value.trim().toLowerCase();

    if (dish) {
        // Mock price data for different platforms (you can replace this with actual API calls)
        const priceData = {
            "burger": [
                { platform: "Swiggy", price: 150 },
                { platform: "Zomato", price: 160 },
                { platform: "Uber Eats", price: 145 }
            ],
            "pizza": [
                { platform: "Swiggy", price: 300 },
                { platform: "Zomato", price: 280 },
                { platform: "Uber Eats", price: 290 }
            ],
            "pasta": [
                { platform: "Swiggy", price: 220 },
                { platform: "Zomato", price: 210 },
                { platform: "Uber Eats", price: 215 }
            ],
            "fries": [
                { platform: "Swiggy", price: 120 },
                { platform: "Zomato", price: 110 },
                { platform: "Uber Eats", price: 115 }
            ],
        };

        // Display results based on the dish searched
        if (priceData[dish]) {
            displayResults(dish, priceData[dish]);
        } else {
            document.getElementById('comparison-results').innerHTML = `<p>No prices found for "${dish}". Please try another dish.</p>`;
        }
    }
});

// Function to display results
function displayResults(dish, data) {
    let resultsHTML = `<h3>Price Comparison for ${dish.charAt(0).toUpperCase() + dish.slice(1)}:</h3><ul>`;
    data.forEach(item => {
        resultsHTML += `<li><strong>${item.platform}:</strong> ₹${item.price}</li>`;
    });
    resultsHTML += `</ul>`;

    document.getElementById('comparison-results').innerHTML = resultsHTML;
    document.getElementById('results-section').style.display = 'block'; // Show the results section
}
