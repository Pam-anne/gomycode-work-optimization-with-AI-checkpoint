function createPricingCard(options) {
    const {
        title,
        price,
        features,
        buttonText = "Start Trial",
        onButtonClick
    } = options;

    const card = document.createElement("div");
    card.className = "pricing";

    const titleEl = document.createElement("h2");
    titleEl.className = "title";
    titleEl.textContent = title;

    const priceEl = document.createElement("p");
    priceEl.className = "price";
    priceEl.textContent = price;

    const listEl = document.createElement("ul");
    listEl.className = "features";

    for (const item of features) {
        const li = document.createElement("li");
        li.textContent = item;
        listEl.appendChild(li);
    }

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.type = "button";
    btn.textContent = buttonText;
    btn.addEventListener("click", () => {
        if (typeof onButtonClick === "function") onButtonClick();
    });

    card.appendChild(titleEl);
    card.appendChild(priceEl);
    card.appendChild(listEl);
    card.appendChild(btn);

    return card;
}

// Example usage: render multiple cards on the same page.
const cardsEl = document.getElementById("cards");

const pricingData = [
    {
        title: "Basic Plan",
        price: "$9.99 /month",
        features: ["1 GB Storage", "Basic Support", "All Core Features"],
        onButtonClick: () => alert("Starting Basic Trial")
    },
    {
        title: "Pro Plan",
        price: "$19.99 /month",
        features: ["10 GB Storage", "Priority Support", "Advanced Features"],
        buttonText: "Go Pro",
        onButtonClick: () => alert("Starting Pro Trial")
    },
    {
        title: "Team Plan",
        price: "$49.99 /month",
        features: ["Shared Workspace", "Team Analytics", "Dedicated Support"],
        buttonText: "Contact Sales",
        onButtonClick: () => alert("Contacting Sales")
    }
];

for (const data of pricingData) {
    cardsEl.appendChild(createPricingCard(data));
}
