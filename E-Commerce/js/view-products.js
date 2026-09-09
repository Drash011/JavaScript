let AllProducts = JSON.parse(localStorage.getItem("products")) || [];

const productTableBody = document.getElementById("productTableBody");
const productSearch = document.getElementById("productSearch");
const navbarSearch = document.getElementById("navbarSearch");
const emptyProducts = document.getElementById("emptyProducts");
const productCount = document.getElementById("productCount");
const totalProducts = document.getElementById("totalProducts");
const availableProducts = document.getElementById("availableProducts");
const outOfStockProducts = document.getElementById("outOfStockProducts");
const totalCategories = document.getElementById("totalCategories");

// DISPLAY PRODUCTS 

function viewProducts(products = AllProducts) {
    productTableBody.innerHTML = "";

    if (products.length === 0) {
        emptyProducts.style.display = "flex";
    } else {
        emptyProducts.style.display = "none";
    }

    productCount.innerText = products.length;

    products.forEach((product) => {
                const originalIndex = AllProducts.indexOf(product);

                productTableBody.innerHTML += `
            <tr>
                <td>
                    <span class="id-badge">
                        ${originalIndex + 1}
                    </span>
                </td>

                <td>

                    <div class="product-info-cell">

                        <div class="product-image-box">
                            <img
                                src="${product.productImage}"
                                alt="${product.productName}"
                            >
                        </div>

                        <div class="product-name">
                            <h6>${product.productName}</h6>

                            <p>${product.description}</p>
                        </div>

                    </div>

                </td>

                <td>
                    <span class="category">
                        ${product.category}
                    </span>
                </td>

                <td>
                    <span class="product-price">
                        ₹${Number(product.price).toLocaleString("en-IN")}
                    </span>
                </td>

                <td>
                    <span class="qty-badge">
                        ${product.quantity}
                    </span>
                </td>

                <td>
                    <span class="brand-name">
                        ${product.brand}
                    </span>
                </td>

                <td>
                    <span class="status-badge ${
                        product.status === "Available"
                            ? "available-status"
                            : "out-stock-status"
                    }">

                        <span></span>

                        ${product.status}

                    </span>
                </td>

                <td>

                    <div class="color-list">
                        ${(product.colors || [])
                            .map(
                                (color) => `
                                    <span
                                        class="color"
                                        title="${color}"
                                        style="background-color: ${color};"
                                    ></span>
                                `
                            )
                            .join("")}
                    </div>

                </td>

                <td class="action-column">

                    <div class="action-buttons">

                        <button
                            class="edit-btn"
                            onclick="editProduct(${originalIndex})"
                            title="Edit Product"
                            type="button"
                        >
                            <i class="bi bi-pencil-fill"></i>
                        </button>

                        <button
                            class="delete-btn"
                            onclick="deleteProduct(${originalIndex})"
                            title="Delete Product"
                            type="button"
                        >
                            <i class="bi bi-trash-fill"></i>
                        </button>

                    </div>

                </td>
            </tr>
        `;
    });

    updateStats();
}


function updateStats() {
    const total = AllProducts.length;

    const available = AllProducts.filter(
        (product) => product.status === "Available"
    ).length;

    const outOfStock = AllProducts.filter(
        (product) => product.status === "Out of Stock"
    ).length;

    const categories = new Set(
        AllProducts.map((product) => product.category)
    ).size;

    totalProducts.innerText = total;
    availableProducts.innerText = available;
    outOfStockProducts.innerText = outOfStock;
    totalCategories.innerText = categories;
}


function searchProducts(value) {
    const searchValue = value.toLowerCase().trim();

    const filteredProducts = AllProducts.filter(
        (product) =>
            product.productName.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue) ||
            product.brand.toLowerCase().includes(searchValue)
    );

    viewProducts(filteredProducts);
}

productSearch.addEventListener("input", (e) => {
    searchProducts(e.target.value);
});

navbarSearch.addEventListener("input", (e) => {
    productSearch.value = e.target.value;
    searchProducts(e.target.value);
});

// DELETE PRODUCT

function deleteProduct(index) {
    AllProducts.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(AllProducts));

    viewProducts();

    Toastify({
        text: "✕ Product deleted successfully!",
        duration: 4000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,

        style: {
            background: `
                linear-gradient(
                    135deg,
                    rgba(170, 55, 55, 0.82),
                    rgba(220, 85, 85, 0.65)
                )
            `,

            backdropFilter: "blur(25px) saturate(180%)",
            WebkitBackdropFilter: "blur(25px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.28)",
            borderRadius: "18px",

            boxShadow: `
                0 15px 45px rgba(150, 40, 40, 0.22),
                inset 0 1px 0 rgba(255, 255, 255, 0.30)
            `,

            color: "#ffffff",
            padding: "18px 25px",
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "0.2px",
            minWidth: "320px",
        },
    }).showToast();
}


function editProduct(index) {
    window.location.href = `add_product.html?edit=${index}`;
}


viewProducts();