document.getElementById('toggleVideosBtn').addEventListener('click', function() {
    const tutorialVideosSection = document.getElementById('tutorialVideos');
    if (tutorialVideosSection.style.display === "none" || tutorialVideosSection.style.display === "") {
        tutorialVideosSection.style.display = "block";
    } else {
        tutorialVideosSection.style.display = "none";
    }
});
