// Function to load video when in view
function loadVideo() {
  const videoPlaceholder = document.getElementById("videoPlaceholder");
  videoPlaceholder.innerHTML = `
    <video class="media__video" poster="assets/thumbnail.png" controls>
      <source src="assets/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;
}

// Check if media section is in view, then load video
const mediaSection = document.getElementById("media");
const options = {
  rootMargin: "0px",
  threshold: 0.1,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadVideo();
      observer.unobserve(mediaSection);
    }
  });
}, options);
observer.observe(mediaSection);
