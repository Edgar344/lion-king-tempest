/**
 * Toggles the 'active' class on the card-back 
 * to show or hide the Shakespearean information.
 */
function toggleCard(cardElement) {
    const back = cardElement.querySelector('.card-back');
    
    // Check if the card is already active
    const isActive = back.classList.contains('active');
    
    // Close all other open cards first (optional, for a cleaner look)
    document.querySelectorAll('.card-back').forEach(card => {
        card.classList.remove('active');
    });

    // If it wasn't active, open it
    if (!isActive) {
        back.classList.add('active');
    }
}