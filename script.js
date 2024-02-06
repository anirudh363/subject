document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home');
    const feedbackButton = document.getElementById('feedback');
    const homePage = document.getElementById('home-page');
    const feedbackPage = document.getElementById('feedback-page');

    homeButton.addEventListener('click', function() {
        homePage.classList.add('active');
        feedbackPage.classList.remove('active');
    });

    feedbackButton.addEventListener('click', function() {
        feedbackPage.classList.add('active');
        homePage.classList.remove('active');
    });

});
