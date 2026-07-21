document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navMenu = document.querySelector('nav ul');
  mobileMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });

  // Smooth scroll
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
        navMenu.classList.remove('show');
      }
    });
  });

  // Testimonials
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let current = 0;
  function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    current = (index + testimonials.length) % testimonials.length;
    testimonials[current].classList.add('active');
  }
  prevBtn.addEventListener('click', () => showTestimonial(current - 1));
  nextBtn.addEventListener('click', () => showTestimonial(current + 1));
  showTestimonial(0);
  setInterval(() => showTestimonial(current + 1), 5000);

  // Books
  const books = [
    { id: 1, link: "https://selar.com/777375", title: "Ashes To Bloom", author: "Success Nwagba T.", image: "ashes to bloom.jpg" },
    { id: 2, link: "https://selar.com/0k61kc7444", title: "Miracle Leaf", author: "Success Nwagba T.", image: "miracle leaf.jpg" },
    { id: 3, link: "https://selar.com/366941", title: "Parenting With Intention", author: "Success Nwagba T.", image: "parenting with intention.jpeg" },
    { id: 4, link: "https://selar.com/cb10701f46", title: "Why The Cross?", author: "Success Nwagba T.", image: "Why The Cross.jpeg" },
    { id: 5, link: "https://selar.com/4f187h7777", title: "God's Systems And Miracles", author: "Success Nwagba T.", image: "Gods system and miracles.png" }
  ];

  const grid = document.getElementById('booksGrid');
  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <div class="book-image"><img src="${book.image}" alt="${book.title}"></div>
      <div class="book-info">
        <h3>${book.title}</h3>
        <p class="author">By ${book.author}</p>
        <a href="${book.link}" target="_blank" class="add-to-cart">Buy</a>
      </div>
    `;
    grid.appendChild(card);
  });

  // Contact form – Web3Forms (already handled by action attribute)
  // You can add a success message handler if needed
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    // Web3Forms handles the submission natively.
    // Optionally show a loading state or success message.
  });
});
