// JavaScript can be used to add interactivity if needed.
// For example, handling click events for the "Influencers" link.

document.addEventListener('DOMContentLoaded', () => {
    const influencerLink = document.querySelector('.navMenus a[href="#"]');
  
    influencerLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'influencers.html'; // Redirect to the influencers page
    });
  });
  