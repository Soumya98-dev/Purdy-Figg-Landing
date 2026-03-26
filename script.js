// ============================
// FAQ Accordion
// ============================
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    // Close all others
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      otherItem
        .querySelector(".faq-question")
        .setAttribute("aria-expanded", "false");
      otherItem.querySelector(".faq-answer").hidden = true;
      otherItem.querySelector(".faq-icon").textContent = "⊖";
    });

    // Toggle current
    if (!isOpen) {
      btn.setAttribute("aria-expanded", "true");
      answer.hidden = false;
      btn.querySelector(".faq-icon").textContent = "⊕";
    }
  });
});

// ============================
// Blend Details Toggle
// ============================
document.querySelectorAll(".blend-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const scentIndex = btn.getAttribute("data-scent");
    const details = document.getElementById(`blend-${scentIndex}`);
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      btn.setAttribute("aria-expanded", "false");
      details.hidden = true;
      btn.querySelector(".blend-icon").textContent = "⊕";
    } else {
      btn.setAttribute("aria-expanded", "true");
      details.hidden = false;
      btn.querySelector(".blend-icon").textContent = "⊖";
    }
  });
});

// ============================
// Bundle Option Selection
// ============================
document.querySelectorAll(".bundle-option").forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelectorAll(".bundle-option").forEach((o) => {
      o.classList.remove("bundle-option--selected");
    });

    option.classList.add("bundle-option--selected");

    const radio = option.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;

    // Update cart button price
    const priceEl = option.querySelector(".bundle-price-new");
    const oldPriceEl = option.querySelector(".bundle-price-old");
    const cartBtn = document.querySelector(".btn-full");
    if (cartBtn && priceEl) {
      const newPrice = priceEl.textContent;
      const oldPrice = oldPriceEl ? oldPriceEl.textContent : "";
      cartBtn.textContent = `ADD TO CART | ${oldPrice} ${newPrice}`;
    }
  });
});

// ============================
// GET YOUR OFFER — reveal & scroll
// ============================
function revealOffer() {
  const offerSection = document.getElementById("offer");
  if (!offerSection) return;

  if (offerSection.hidden) {
    offerSection.hidden = false;
    // Trigger CSS enter animation
    offerSection.classList.add("offer-visible");
  }

  // Small timeout so the browser paints the section before scrolling
  setTimeout(() => {
    offerSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}

document.querySelectorAll('a[href="#offer"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    revealOffer();
  });
});
