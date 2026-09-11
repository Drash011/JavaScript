const productForm = document.getElementById("AllProducts");

let allProducts = JSON.parse(localStorage.getItem("products")) || [];

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    document.querySelectorAll("input, textarea, select").forEach((input) => {
        input.classList.remove("border-danger");
    });

    document.querySelectorAll(".error").forEach((error) => {
        error.innerText = "";
    });

    const productName = document.getElementById("productName");
    const category = document.getElementById("category");
    const price = document.getElementById("price");
    const quantity = document.getElementById("quantity");
    const brand = document.getElementById("brand");
    const productImage = document.getElementById("productImage");
    const description = document.getElementById("description");

    const selectedStatus = document.querySelector(
        'input[name="status"]:checked'
    );

    const selectedColors = document.querySelectorAll(
        'input[name="colors"]:checked'
    );

    let isValid = true;


    if (productName.value.trim() === "") {
        productName.classList.add("border-danger");

        document.getElementById("productNameError").innerText =
            "* Please enter product name";

        isValid = false;

    } else if (productName.value.trim().length < 3) {
        productName.classList.add("border-danger");

        document.getElementById("productNameError").innerText =
            "* Product name must be at least 3 characters";

        isValid = false;
    }


    if (category.value === "") {
        category.classList.add("border-danger");

        document.getElementById("categoryError").innerText =
            "* Please select a category";

        isValid = false;
    }


    if (price.value === "") {
        price.classList.add("border-danger");

        document.getElementById("priceError").innerText =
            "* Please enter product price";

        isValid = false;

    } else if (Number(price.value) <= 0) {
        price.classList.add("border-danger");

        document.getElementById("priceError").innerText =
            "* Price must be greater than 0";

        isValid = false;
    }


    if (quantity.value === "") {
        quantity.classList.add("border-danger");

        document.getElementById("quantityError").innerText =
            "* Please enter product quantity";

        isValid = false;

    } else if (Number(quantity.value) <= 0) {
        quantity.classList.add("border-danger");

        document.getElementById("quantityError").innerText =
            "* Quantity must be greater than 0";

        isValid = false;
    }


    if (brand.value.trim() === "") {
        brand.classList.add("border-danger");

        document.getElementById("brandError").innerText =
            "* Please enter brand name";

        isValid = false;

    } else if (brand.value.trim().length < 2) {
        brand.classList.add("border-danger");

        document.getElementById("brandError").innerText =
            "* Brand name must be at least 2 characters";

        isValid = false;
    }


    if (productImage.value.trim() === "") {
        productImage.classList.add("border-danger");

        document.getElementById("imageError").innerText =
            "* Please enter image URL";

        isValid = false;
    }


    if (description.value.trim() === "") {
        description.classList.add("border-danger");

        document.getElementById("descriptionError").innerText =
            "* Please write product description";

        isValid = false;

    } else if (description.value.trim().length < 10) {
        description.classList.add("border-danger");

        document.getElementById("descriptionError").innerText =
            "* Description must be at least 10 characters";

        isValid = false;
    }


    if (!selectedStatus) {
        document.getElementById("statusError").innerText =
            "* Please select product status";

        isValid = false;
    }


    if (selectedColors.length === 0) {
        document.getElementById("colorError").innerText =
            "* Please select at least one color";

        isValid = false;
    }


    if (!isValid) {
        return;
    }


    const product = {
        id: Math.floor(Math.random() * 999999) + 10000,
        productName: productName.value.trim(),
        category: category.value,
        price: price.value,
        quantity: quantity.value,
        brand: brand.value.trim(),
        productImage: productImage.value.trim(),
        description: description.value.trim(),
        status: selectedStatus.value,
        colors: [...selectedColors].map((color) => color.value)
    };


    allProducts.push(product);

    localStorage.setItem(
        "products",
        JSON.stringify(allProducts)
    );

    Toastify({
        text: "✓ Product added successfully!",
        duration: 4000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(135deg, rgba(24, 82, 60, 0.82), rgba(47, 125, 91, 0.68))",
            backdropFilter: "blur(25px) saturate(180%)",
            WebkitBackdropFilter: "blur(25px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.32)",
            borderRadius: "18px",
            boxShadow: "0 15px 45px rgba(22, 70, 50, 0.25), 0 5px 20px rgba(31, 101, 73, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.35)",
            color: "#ffffff",
            padding: "18px 25px",
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "0.2px",
            minWidth: "320px"
        }
    }).showToast();

    productForm.reset();
});