document.addEventListener('DOMContentLoaded', function() {
  if (window.VANTA) {
    VANTA.FOG({
      el: "body",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xe6e6e6,
      lowlightColor: 0xfa032e,
      baseColor: 0x6b6b6b
    });
  }
});
