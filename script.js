document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('show');
            }
        });
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        currentTestimonial = index;
        testimonials[currentTestimonial].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial - 1;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        showTestimonial(newIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    });
    
    // Initialize first testimonial
    showTestimonial(0);
    
    // Auto-rotate testimonials
    setInterval(() => {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    }, 5000);
  /*
    // Calendar Initialization
    const calendar = flatpickr("#calendar", {
        inline: true,
        onChange: function(selectedDates, dateStr, instance) {
            updateEventsDisplay(selectedDates[0]);
        }
    });
    
    // Sample Events Data
    const events = [
        {
            date: new Date(),
            title: "Weekly Bible Study",
            time: "4:00 PM - 5:30 PM",
            description: "Interactive Bible study session for all age groups"
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() + 7)),
            title: "Youth Worship Night",
            time: "6:00 PM - 8:00 PM",
            description: "Special worship and prayer night for teenagers"
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() + 14)),
            title: "Community Service Day",
            time: "9:00 AM - 12:00 PM",
            description: "Helping at the local food bank and neighborhood cleanup"
        },
        {
            date: new Date(new Date().setDate(new Date().getDate() + 21)),
            title: "Parent-Child Bible Workshop",
            time: "10:00 AM - 12:00 PM",
            description: "Special session for parents and children to study together"
        }
    ];
    
    // Display events for the selected date
    function updateEventsDisplay(selectedDate) {
        const eventsDisplay = document.getElementById('events-display');
        eventsDisplay.innerHTML = '';
        
        // Filter events for the selected month
        const monthEvents = events.filter(event => {
            return event.date.getMonth() === selectedDate.getMonth() && 
                   event.date.getFullYear() === selectedDate.getFullYear();
        });
        
        if (monthEvents.length === 0) {
            eventsDisplay.innerHTML = '<li>No events scheduled for this month</li>';
            return;
        }
        
        monthEvents.forEach(event => {
            const eventItem = document.createElement('li');
            eventItem.innerHTML = `
                <h4>${event.title}</h4>
                <p><strong>Date:</strong> ${event.date.toDateString()}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p>${event.description}</p>
            `;
            eventsDisplay.appendChild(eventItem);
        });
    }
    
    // Initialize with current date
    updateEventsDisplay(new Date());
    */
    // Bookstore Functionality
    const books = [
        {
            id: 1,
            link: "https://selar.com/777375", 
            title: "Ashes To Bloom",
            author: "Success Nwagba T.",
            price: 15.99,
            description: "An Ebook on grace and resilliance.",
            image: "ashes to bloom.jpg"
        },
        {
            id: 2,
            link: "https://selar.com/0k61kc7444",
            title: "Miracle Leaf",
            author: "Success Nwagba T.",
            price: 12.99,
            description: "Discover the wonders of the universe with the Creator. Indescribable displays the majesty of creation with scientific findings, photography, and original illustrations.",
            image: "miracle leaf.jpg"
        },
        {
            id: 3,
            link: "https://selar.com/366941",
            title: "Parenting With Intention",
            author: "Happiness Nwagba",
            price: 19.99,
            description: "The Action Bible presents more than 230 fast-paced narratives in chronological order, making it easy to follow the Bible's historical flow.",
            image: "parenting with intention.jpeg"
        },
      /*  {
            id: 4,
            title: "God's Big Picture Bible Storybook",
            author: "N.T. Wright",
            price: 14.99,
            description: "A beautifully illustrated, large-format Bible storybook for children that makes God's big story of redemption come alive.",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            title: "The Beginner's Bible",
            author: "Zondervan",
            price: 11.99,
            description: "One of the most beloved storybooks of our time, with over 25 million products sold, introduces children to the stories of the Bible.",
            image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            title: "Laugh and Grow Bible for Kids",
            author: "Phil Vischer",
            price: 16.99,
            description: "The Laugh and Grow Bible for Kids will guide readers from Genesis to Revelation, retelling beloved Bible stories and tackling tricky questions like 'What is sin?'",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }*/
    ];
    
    const booksGrid = document.querySelector('.books-grid');
    
    // Display books
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">By ${book.author}</p>
                <!--<p class="price">$${book.price.toFixed(2)}</p>-->
                <a href=${book.link}  class="add-to-cart" data-id="${book.id}">Buy</a>
            </div>
        `;
        booksGrid.appendChild(bookCard);
    });
    /*
    // Shopping Cart Functionality
    let cart = [];
    
    // Add to Cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const bookId = parseInt(this.getAttribute('data-id'));
            const book = books.find(b => b.id === bookId);
            
            // Check if book already in cart
            const existingItem = cart.find(item => item.id === bookId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...book,
                    quantity: 1
                });
            }
            
            updateCart();
            
            // Show notification
            const notification = document.createElement('div');
            notification.className = 'cart-notification';
            notification.textContent = `${book.title} added to cart!`;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 10);
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 2000);
        });
    });
    
    // Update Cart
    function updateCart() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        
        // Save to localStorage
        localStorage.setItem('realmCommunityCart', JSON.stringify(cart));
    }
    
    // Load cart from localStorage
    if (localStorage.getItem('realmCommunityCart')) {
        cart = JSON.parse(localStorage.getItem('realmCommunityCart'));
        updateCart();
    }
    
    // Cart Modal
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeCartModal = cartModal.querySelector('.close');
    
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        showCartModal();
    });
    
    closeCartModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    function showCartModal() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
            cartTotal.textContent = '0.00';
        } else {
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="cart-item-details">
                            <h4>${item.title}</h4>
                            <p>By ${item.author}</p>
                        </div>
                    </div>
                    <div class="cart-item-price">
                        $${item.price.toFixed(2)}
                    </div>
                    <div class="cart-item-quantity">
                        <button class="decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-id="${item.id}">+</button>
                    </div>
                    <div class="cart-item-total">
                        $${itemTotal.toFixed(2)}
                    </div>
                    <div class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
            
            cartTotal.textContent = total.toFixed(2);
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.decrease').forEach(button => {
                button.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    const item = cart.find(item => item.id === id);
                    
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    } else {
                        cart = cart.filter(item => item.id !== id);
                    }
                    
                    updateCart();
                    showCartModal();
                });
            });
            
            document.querySelectorAll('.increase').forEach(button => {
                button.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    const item = cart.find(item => item.id === id);
                    item.quantity += 1;
                    
                    updateCart();
                    showCartModal();
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    cart = cart.filter(item => item.id !== id);
                    
                    updateCart();
                    showCartModal();
                });
            });
        }
        
        cartModal.style.display = 'block';
    }
    
    // Checkout Modal
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckoutModal = checkoutModal.querySelector('.close');
    
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        showCheckoutModal();
    });
    
    closeCheckoutModal.addEventListener('click', function() {
        checkoutModal.style.display = 'none';
    });
    
    function showCheckoutModal() {
        const checkoutSummary = document.getElementById('checkout-summary');
        const checkoutTotal = document.getElementById('checkout-total');
        
        checkoutSummary.innerHTML = '';
        
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span>${item.title} x ${item.quantity}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            `;
            checkoutSummary.appendChild(orderItem);
        });
        
        checkoutTotal.textContent = total.toFixed(2);
        
        // Show payment method fields based on selection
        const paymentMethod = document.getElementById('checkout-payment');
        const creditCardInfo = document.getElementById('credit-card-info');
        
        paymentMethod.addEventListener('change', function() {
            if (this.value === 'credit') {
                creditCardInfo.style.display = 'block';
            } else {
                creditCardInfo.style.display = 'none';
            }
        });
        
        checkoutModal.style.display = 'block';
    }
    
    // Checkout Form Submission
    const checkoutForm = document.getElementById('checkout-form');
    
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would process the payment here
        // For this demo, we'll just show a success message
        
        alert('Thank you for your purchase! Your order has been placed.');
        
        // Clear the cart
        cart = [];
        updateCart();
        
        // Close modals
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'none';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (e.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the form data to the server
        // For this demo, we'll just show a success message
        
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset the form
        this.reset();
    });
    */
    /*
    // Payment Method Toggle
    const paymentMethodSelect = document.getElementById('checkout-payment');
    const creditCardInfo = document.getElementById('credit-card-info');
    
    paymentMethodSelect.addEventListener('change', function() {
        if (this.value === 'credit') {
            creditCardInfo.style.display = 'block';
        } else {
            creditCardInfo.style.display = 'none';
        }
    });
    
    // Initialize credit card info as hidden
    creditCardInfo.style.display = 'none';
    
    // Add cart notification style dynamically
    const style = document.createElement('style');
    style.textContent = `
        .cart-notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-color);
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 3000;
        }
        .cart-notification.show {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
    */
});
