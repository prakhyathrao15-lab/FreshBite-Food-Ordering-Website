const restaurantSearch = document.querySelector('#restaurant-search');

if (restaurantSearch) {
  const restaurantCards = [...document.querySelectorAll('.restaurant-card')];
  const searchMessage = document.querySelector('#search-message');

  restaurantSearch.addEventListener('input', () => {
    const query = restaurantSearch.value.trim().toLowerCase();
    let matches = 0;

    restaurantCards.forEach((card) => {
      const matchesSearch = card.dataset.search.toLowerCase().includes(query);
      card.hidden = !matchesSearch;
      if (matchesSearch) matches += 1;
    });

    searchMessage.textContent = matches ? '' : 'No restaurants match your search.';
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
let cart = [];

const cartCounter = document.getElementById("cart-count");

console.log("Toast:", toast);
console.log("Buttons:", document.querySelectorAll(".add-cart").length);
document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        cart.push("Food Item");

        if (cartCounter) {
            cartCounter.textContent = cart.length;
        }

        if (toast) {
            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);
        }

    });

});