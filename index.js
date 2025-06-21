document.querySelectorAll('.toggle-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const container = this.closest('.feature');
      const shortText = container.querySelector('.short-text');
      const fullText = container.querySelector('.full-text');

      // Εναλλαγή προβολής
      const isExpanded = fullText.classList.contains('d-none');

      if (isExpanded) {
        shortText.classList.add('d-none');
        fullText.classList.remove('d-none');
        this.textContent = 'Λιγότερα...';
      } else {
        fullText.classList.add('d-none');
        shortText.classList.remove('d-none');
        this.textContent = 'Περισσότερα...';
      }
    });
  });

// annimation sto id=animatedHeading stis upiresies section3
const heading = document.getElementById('animatedHeading');
function playAnimation() {
    // Αφαιρούμε την κλάση (reset)
    heading.classList.remove('animate__pulse'); 

    // Αναγκάζουμε reflow για να ξαναπαίξει σωστά
    void heading.offsetWidth;

    // Ξαναπροσθέτουμε την κλάση
    heading.classList.add('animate__pulse');

    // Επαναφορά μετά από 3 δευτερόλεπτα
    setTimeout(playAnimation, 2000);
  }
  // Έναρξη animation loop όταν φορτωθεί το DOM
  document.addEventListener("DOMContentLoaded", playAnimation);

  setInterval(() => {
    const badge = document.getElementById('neo1-badge');
    badge.classList.remove('animate__animated', 'animate__flash');
    void badge.offsetWidth;
    badge.classList.add('animate__animated', 'animate__flash');
  }, 2000);