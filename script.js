
document.addEventListener("DOMContentLoaded", () => {

  // Poster category filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const posterCards = document.querySelectorAll(".poster-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const category = button.dataset.filter;

      posterCards.forEach(card => {
        if (
          category === "all" ||
          card.dataset.category === category
        ) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });

  // Image lightbox preview
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const closeLightbox = document.getElementById("closeLightbox");

  posterCards.forEach(card => {
    card.addEventListener("click", () => {
      const image = card.querySelector("img");

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;

      lightbox.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });

  // Close image preview
  function closePreview() {
    lightbox.classList.remove("show");
    document.body.style.overflow = "";
  }

  closeLightbox.addEventListener("click", closePreview);

  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
      closePreview();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closePreview();
    }
  });

});
