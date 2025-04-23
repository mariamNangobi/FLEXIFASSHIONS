let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Product added to cart!");


    let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Product added to cart!");
}

function buyNow() {
    alert("Redirecting to checkout...");
    window.location.href = "checkout.html";
}

// Submit Review Function
function submitReview() {
    let name = document.getElementById("review-name").value;
    let reviewText = document.getElementById("review-text").value;
    let rating = document.getElementById("rating").value;

    if (name === "" || reviewText === "") {
        alert("Please enter your name and review.");
        return;
    }

    let reviewList = document.getElementById("review-list");
    let newReview = document.createElement("div");
    newReview.innerHTML = `<p><strong>${name}</strong> (⭐ ${rating})</p><p>${reviewText}</p><hr>`;
    reviewList.appendChild(newReview);

    // Clear inputs
    document.getElementById("review-name").value = "";
    document.getElementById("review-text").value = "";
    document.getElementById("rating").value = "5";

    alert("Review submitted successfully!");
}

}

