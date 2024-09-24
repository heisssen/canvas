const sizeSlider = document.getElementById('sizeSlider');
const dimensionsDisplay = document.getElementById('dimensions');
const priceDisplay = document.getElementById('price');

// Function to update size and price
function updatePrice(newSize) {
  const basePrice = 100;  // Let's assume 50cm starts at $100
  const pricePer5cm = 10; // Every 5 cm adds $10 to the price

  const newPrice = basePrice + ((newSize - 50) / 5) * pricePer5cm; // Calculate based on size
  
  // Update dimensions and price display
  dimensionsDisplay.textContent = `${newSize} cm`;
  priceDisplay.textContent = newPrice.toFixed(2);
}

// Smooth slider interaction
sizeSlider.addEventListener('input', function() {
  updatePrice(sizeSlider.value);
});

// Initialize price and size display
updatePrice(100);
