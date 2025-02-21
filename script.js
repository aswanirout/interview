
const radios = document.querySelectorAll("input[name='shirt']");
const totalDisplay = document.getElementById("total");

function updateTotal() {
    let selectedValue = document.querySelector("input[name='shirt']:checked").value;
    let price = 10;


    document.querySelectorAll(".extra-options").forEach(el => el.remove());

    if (selectedValue === "1") {
        price = 10;
    } else if (selectedValue === "2") {
        price = 18;
        addOptions(document.querySelector("input[value='2']").parentElement, 2);
    } else if (selectedValue === "3") {
        price = 24;
        addOptions(document.querySelector("input[value='3']").parentElement, 3);
    }

    totalDisplay.innerHTML = `Total: $${price}.00 USD`;
}

function addOptions(parentElement, count) {
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("extra-options");

    let optionsHTML = "";
    for (let i = 1; i <= count; i++) {
        optionsHTML += `
                <label>#${i} Size: 
                    <select>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </label>
                <label>Color: 
                    <select>
                        <option>Black</option>
                        <option>White</option>
                    </select>
                </label>
                <br>
            `;
    }

    optionsDiv.innerHTML = optionsHTML;
    parentElement.appendChild(optionsDiv);
}

radios.forEach(radio => {
    radio.addEventListener("change", updateTotal);
});


updateTotal();

function addToCart() {
    let selectedShirt = document.querySelector("input[name='shirt']:checked");

    if (!selectedShirt) {
        alert("Error: No shirt selected!");
    } else {
        let selectedValue = selectedShirt.value; // Access value safely
        alert("Cart added successfully! Selected Shirt: " + selectedValue);
    }
}
