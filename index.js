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