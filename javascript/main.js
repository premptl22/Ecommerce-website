document.addEventListener("DOMContentLoaded", () => {
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      alert(`You clicked on ${card.querySelector("h3").innerText}`);
      // Add navigation or further functionality here
    });
  });
});
