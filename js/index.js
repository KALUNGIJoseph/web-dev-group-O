// SEARCH FORM VALIDATION
const searchForm = document.querySelector('.details');
if (searchForm) {
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const destination = document.getElementById('destination').value.trim();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const adults = document.getElementById('adults').value;

    // Validate fields
    if (!destination || !checkin || !checkout || !adults) {
      alert('Please fill in all fields before searching');
      return;
    }

    // Validate check-in and check-out dates
    if (new Date(checkin) >= new Date(checkout)) {
      alert('Check-out date must be after check-in date');
      return;
    }

    // If validation passes
    alert(`Search initiated!\n\nDestination: ${destination}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nAdults: ${adults}`);
    // You can submit the form or process the data here
  });
}


// SIGN-IN FORM VALIDATION
const signinForm = document.querySelector('#signin form');
if (signinForm) {
  signinForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Password validation (minimum 8 characters)
    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }

    // If validation passes
    alert('Sign-in successful! Welcome back.');
    // You can submit the form or process the data here
    // this.reset(); // Optional: reset form after submission
  });
}

// DESTINATION CARD HOVER EFFECT 
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.1)';
  });
});


// BLOG POST HOVER EFFECT 
const blogPosts = document.querySelectorAll('.blog-post');
blogPosts.forEach(post => {
  post.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
  });

  post.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});
