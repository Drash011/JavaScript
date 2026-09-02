const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll("input, textarea, select").forEach(input => {
        input.classList.remove("border-danger");
    });

    document.querySelectorAll(".error").forEach(span => {
        span.innerText = "";
    });

    const productName = document.getElementById("productName");
    const category = document.getElementById("category");
    const price = document.getElementById("price");
    const quantity = document.getElementById("quantity");
    const brand = document.getElementById("brand");
    const productImage = document.getElementById("productImage");
    const description = document.getElementById("description");
    const status = document.querySelectorAll('input[name="status"]:checked');
    const colors = document.querySelectorAll('input[name="colors"]:checked');

    let isValid = true;

    if (productName.value.trim() === "") {
        productName.classList.add("border-danger");
        document.querySelector("#productNameError").innerText = "* Please enter product name...";
        isValid = false;
    } else if (productName.value.trim().length < 3) {
        productName.classList.add("border-danger");
        document.querySelector("#productNameError").innerText = "* Product name must be at least 3 characters...";
        isValid = false;
    }

    if (category.value === "") {
        category.classList.add("border-danger");
        document.querySelector("#categoryError").innerText = "* Please select a category...";
        isValid = false;
    }

    if (price.value === "") {
        price.classList.add("border-danger");
        document.querySelector("#priceError").innerText = "* Please enter product price...";
        isValid = false;
    } else if (Number(price.value) <= 0) {
        price.classList.add("border-danger");
        document.querySelector("#priceError").innerText = "* Price must be greater than 0...";
        isValid = false;
    }

    if (quantity.value === "") {
        quantity.classList.add("border-danger");
        document.querySelector("#quantityError").innerText = "* Please enter product quantity...";
        isValid = false;
    } else if (Number(quantity.value) <= 0) {
        quantity.classList.add("border-danger");
        document.querySelector("#quantityError").innerText = "* Quantity must be greater than 0...";
        isValid = false;
    }

    if (brand.value.trim() === "") {
        brand.classList.add("border-danger");
        document.querySelector("#brandError").innerText = "* Please enter brand name...";
        isValid = false;
    } else if (brand.value.trim().length < 2) {
        brand.classList.add("border-danger");
        document.querySelector("#brandError").innerText = "* Brand name must be at least 2 characters...";
        isValid = false;
    }

    const imageError = document.querySelector("#imageError");

    const imageUrl = productImage.value.trim();

    if (imageUrl === "") {
        productImage.classList.add("border-danger");
        imageError.innerText = "* Please enter something...";
        isValid = false;
    } else {
        // Accept ANY value
        imageError.innerText = "";
        productImage.classList.remove("border-danger");
    }

    if (description.value.trim() === "") {
        description.classList.add("border-danger");
        document.querySelector("#descriptionError").innerText = "* Please write product description...";
        isValid = false;
    } else if (description.value.trim().length < 10) {
        description.classList.add("border-danger");
        document.querySelector("#descriptionError").innerText = "* Description must be at least 10 characters...";
        isValid = false;
    }

    if (status.length === 0) {
        document.querySelector("#statusError").innerText = "* Please select product status...";
        isValid = false;
    }

    if (colors.length === 0) {
        document.querySelector("#colorError").innerText = "* Please select at least one product color...";
        isValid = false;
    }
    // All validation above...

    if (isValid) {

        const product = {
            productName: productName.value.trim(),
            category: category.value,
            price: price.value,
            quantity: quantity.value,
            brand: brand.value.trim(),
            productImage: productImage.value.trim(),
            description: description.value.trim(),
            status: status[0].value,
            colors: [...colors].map(color => color.value)
        };

        let allProducts = JSON.parse(localStorage.getItem("products")) || [];

        allProducts.push(product);

        localStorage.setItem("products", JSON.stringify(allProducts));

        alert("Product added successfully!");

        console.log("Product added:", product);

        productForm.reset();
    }
});