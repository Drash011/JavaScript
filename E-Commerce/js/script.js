let AllProducts = JSON.parse(localStorage.getItem("products")) || [];

const DisplayProducts = document.getElementById("displayProducts");
const homeProductSearch = document.getElementById("homeProductSearch");
const navbarSearch = document.getElementById("navbarSearch");
const categoryFilters = document.getElementById("categoryFilters");
const homeEmptyProducts = document.getElementById("homeEmptyProducts");

// DISPLAY PRODUCTS
function displayProducts(products = AllProducts) {
    DisplayProducts.innerHTML = "";

    if (products.length === 0) {
        homeEmptyProducts.style.display = "flex";
        return;
    }

    homeEmptyProducts.style.display = "none";

    products.forEach((product) => {
                const originalIndex = AllProducts.indexOf(product);

                const statusClass =
                    product.status === "Available" ? "available" : "out-stock";

                DisplayProducts.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6">

                <div
                    class="home-product-card"
                    onclick="openProduct(${originalIndex})"
                >

                    <div class="home-product-image-wrapper">

                        <img
                            src="${product.productImage}"
                            alt="${product.productName}"
                        >

                        <span class="product-status ${statusClass}">
                            ${product.status}
                        </span>

                        <span class="product-category-tag">
                            ${product.category}
                        </span>

                    </div>

                    <div class="home-product-content">

                        <div class="product-brand">
                            ${product.brand}
                        </div>

                        <h3>${product.productName}</h3>

                        <p>${product.description}</p>

                        <div class="home-product-bottom">

                            <div>

                                <span class="price-label">
                                    Price
                                </span>

                                <strong>
                                    ₹${Number(product.price).toLocaleString("en-IN")}
                                </strong>

                            </div>

                            <div class="home-product-colors">

                                ${(product.colors || [])
                                    .slice(0, 4)
                                    .map(
                                        (color) => `
                                            <span
                                                style="background: ${color}"
                                            ></span>
                                        `
                                    )
                                    .join("")}

                            </div>

                        </div>

                    </div>

                    <div class="product-card-overlay">

                        <button>
                            View Details
                            <i class="bi bi-arrow-right"></i>
                        </button>

                    </div>

                </div>

            </div>
        `;
    });
}


function openProduct(index) {
    localStorage.setItem("selectedProduct", index);

    window.location.href = "product-details.html";
}


function updateHomeStats() {
    const total = AllProducts.length;

    const available = AllProducts.filter(
        (product) => product.status === "Available"
    ).length;

    const outStock = AllProducts.filter(
        (product) => product.status === "Out of Stock"
    ).length;

    const categories = new Set(
        AllProducts.map((product) => product.category)
    ).size;

    document.getElementById("heroProductCount").innerText = `${total}+`;

    document.getElementById("heroCategoryCount").innerText = `${categories}+`;

    document.getElementById("totalHomeProducts").innerText = total;

    document.getElementById("availableHomeProducts").innerText = available;

    document.getElementById("homeCategories").innerText = categories;

    document.getElementById("outStockHomeProducts").innerText = outStock;
}


function displayFeaturedProduct() {
    if (AllProducts.length === 0) {
        return;
    }

    const product = AllProducts[0];

    const imageContainer = document.getElementById("heroProductImage");

    imageContainer.innerHTML = `
        <img
            src="${product.productImage}"
            alt="${product.productName}"
        >
    `;

    document.getElementById("heroProductName").innerText =
        product.productName;

    document.getElementById("heroProductPrice").innerText =
        `₹${Number(product.price).toLocaleString("en-IN")}`;
}


function createCategoryFilters() {
    const categories = [
        ...new Set(AllProducts.map((product) => product.category)),
    ];

    categoryFilters.innerHTML = `
        <button
            class="category-filter active"
            data-category="All"
        >
            All Products
        </button>
    `;

    categories.forEach((category) => {
        categoryFilters.innerHTML += `
            <button
                class="category-filter"
                data-category="${category}"
            >
                ${category}
            </button>
        `;
    });

    const filterButtons =
        document.querySelectorAll(".category-filter");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const category = button.dataset.category;

            if (category === "All") {
                displayProducts(AllProducts);
            } else {
                const filtered = AllProducts.filter(
                    (product) => product.category === category
                );

                displayProducts(filtered);
            }
        });
    });
}


function searchProducts(value) {
    const searchValue = value.toLowerCase().trim();

    const filteredProducts = AllProducts.filter(
        (product) =>
            product.productName.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue) ||
            product.brand.toLowerCase().includes(searchValue)
    );

    displayProducts(filteredProducts);
}

homeProductSearch.addEventListener("input", (e) => {
    searchProducts(e.target.value);
});

navbarSearch.addEventListener("input", (e) => {
    homeProductSearch.value = e.target.value;

    searchProducts(e.target.value);
});


displayProducts();
updateHomeStats();
displayFeaturedProduct();
createCategoryFilters();