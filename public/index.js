const inputName = document.querySelector("#productName");
const inputPrice = document.querySelector("#productPrice");

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const name = inputName.value;
  const price = inputPrice.value;

  fetch("/api/v1/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  });
});
