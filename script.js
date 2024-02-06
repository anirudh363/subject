document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home');
    const feedbackButton = document.getElementById('feedback');
    const homePage = document.getElementById('home-page');
    const feedbackPage = document.getElementById('feedback-page');

    homeButton.addEventListener('click', function() {
        homePage.classList.add('active');
        feedbackPage.classList.remove('active');

        // Show home page and hide feedback page
        homePage.style.display = 'block';
        feedbackPage.style.display = 'none';
    });

    feedbackButton.addEventListener('click', function() {
        feedbackPage.classList.add('active');
        homePage.classList.remove('active');

        // Show feedback page and hide home page
        feedbackPage.style.display = 'block';
        homePage.style.display = 'none';
    });

    // Show home page by default
    homePage.classList.add('active');
    feedbackPage.classList.remove('active');
});
