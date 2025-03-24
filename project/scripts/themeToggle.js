// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved user preference, if any
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply the saved theme or default to dark
  document.body.classList.toggle('dark-theme', savedTheme === 'dark');
  
  // Optional: Create and add a theme toggle button if not already present
  if (!document.getElementById('theme-toggle')) {
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.className = 'theme-toggle-btn';
    themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    themeToggle.addEventListener('click', () => {
      // Toggle dark theme class on body
      document.body.classList.toggle('dark-theme');
      
      // Save user preference
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      // Update button text
      themeToggle.innerHTML = isDark ? '☀️' : '🌙';
    });
    
    // Add the button to the top-right corner of the page
    themeToggle.style.position = 'fixed';
    themeToggle.style.top = '1rem';
    themeToggle.style.right = '1rem';
    themeToggle.style.zIndex = '1000';
    themeToggle.style.padding = '0.5rem';
    themeToggle.style.borderRadius = '50%';
    themeToggle.style.border = 'none';
    themeToggle.style.cursor = 'pointer';
    
    document.body.appendChild(themeToggle);
  }
});
