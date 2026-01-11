// Конструкція switch
const subChoose = document.querySelector("#subChoose");
const output = document.querySelector(".output");

subChoose.addEventListener("change", (event) => {
  let price = 0;

  const sub = event.target.value;

  switch (sub) {
    case "free":
      price = 0;я
      break;
    case "premium":
      price = 50;
      break;
    case "vip":
      price = 150;
      break;
    default:
      console.error("Потрібно обрати тип підписки");
  }

  const message = `Ціна підписки ${price}$`;
  output.textContent = message;
});
