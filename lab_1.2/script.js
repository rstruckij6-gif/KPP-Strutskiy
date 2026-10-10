document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showMoviesBtn");
    const moviesSection = document.getElementById("movies");

    button.addEventListener("click", function () {
        moviesSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});
