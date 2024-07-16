document.addEventListener('DOMContentLoaded', (event) => {
    // Function to handle navigation click
    const handleNavClick = (event) => {
        event.preventDefault(); // Prevent default link behavior
        const section = event.target.id;

        // Check which section was clicked and update the content
        const content = document.getElementById('content');
        switch (section) {
            case 'home':
                content.innerHTML = `
                    <h2>Home</h2>
                    <p>Welcome to the home page!</p>
                    <p>This is a simple HTML page created to demonstrate the basic structure of a web page. You can modify the content and style as you like.</p>
                `;
                break;
            case 'about':
                content.innerHTML = `
                    <h2>About</h2>
                    <p>About this page content goes here.</p>
                    <p>This is a simple HTML page created to demonstrate the basic structure of a web page. You can modify the content and style as you like.</p>
                `;
                break;
            case 'services':
                content.innerHTML = `
                    <h2>Services</h2>
                    <p>Services we offer content goes here.</p>
                    <p>This is a simple HTML page created to demonstrate the basic structure of a web page. You can modify the content and style as you like.</p>
                `;
                break;
            case 'contact':
                content.innerHTML = `
                    <h2>Contact</h2>
                    <p>Contact us content goes here.</p>
                    <p>This is a simple HTML page created to demonstrate the basic structure of a web page. You can modify the content and style as you like.</p>
                `;
                break;
            default:
                content.innerHTML = `
                    <h2>Welcome</h2>
                    <p>Use the navigation links to explore the page.</p>
                `;
        }
    };

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Add event listener to alert button
    const alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});
