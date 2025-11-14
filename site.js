const categories = ["Evening bags", "Shoulder bag", "Backpack", "Handbag", "Postman bag", "Belt bags", "Hello"];

const categoryElements = categories.map(item => `<li>${item}</li>`);

document.getElementById("categories").innerHTML = categoryElements.join("");
