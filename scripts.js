document.addEventListener('DOMContentLoaded', function() {
  if (window.VANTA) {
    VANTA.BIRDS({
      el: "body",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      birdSize: 1.10,
      speedLimit: 1.00,
      alignment: 24.00,
      cohesion: 13.00
    });
  }
});
