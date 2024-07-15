const reviews = [
    {
        influencerImg: '',
        name: 'Influencer One',
        followers: '500k',
        review: 'This product is amazing!',
        productImg: 'https://via.placeholder.com/200',
        link: '#'
    },
    {
        influencerImg: 'https://via.placeholder.com/100',
        name: 'Influencer Two',
        followers: '1M',
        review: 'I absolutely love this!',
        productImg: 'https://via.placeholder.com/200',
        link: '#'
    },
    {
        influencerImg: 'https://via.placeholder.com/100',
        name: 'Influencer Three',
        followers: '750k',
        review: 'Highly recommend this product!',
        productImg: 'https://via.placeholder.com/200',
        link: '#'
    }
];

let currentReview = 0;

document.addEventListener('DOMContentLoaded', () => {
    displayReview();
});

function displayReview() {
    const reviewBox = document.getElementById('review-box');
    reviewBox.innerHTML = `
        <div class="review active">
            <div class="influencer-details">
                <img src="${reviews[currentReview].influencerImg}" alt="Influencer Image" class="influencer-img">
                <p>${reviews[currentReview].name}</p>
                <button class="more-details" onclick="openMoreDetails(${currentReview + 1})">More details</button>
            </div>
            <div class="product-details">
                <p>${reviews[currentReview].review}</p>
                <img src="${reviews[currentReview].productImg}" alt="Product Image" class="product-img">
                <a href="${reviews[currentReview].link}" target="_blank">More details</a>
            </div>
        </div>
    `;
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    displayReview();
}

function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    displayReview();
}

function openMoreDetails(reviewIndex) {
    alert(`More details for influencer ${reviewIndex}`);
    // Implement your logic to show more details here
}
