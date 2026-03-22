document.addEventListener('DOMContentLoaded', function() {
    
const imageUrl = document.getElementById('cat-image');
const btn = document.getElementById('cat-button');
async function fetchCatImage() {
    btn.disabled = true;
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        console.log('Response received:', response);
        if(!response.ok) {
            console.log('There is no response.');
    }
        const data = await response.json();
        console.log(data);
        imageUrl.src = data[0].url;
        console.log(data[0]);
        imageUrl.width = 400;
        imageUrl.height = 400;
        btn.disabled = false;
    } catch (error) {
        console.error('Error fetching cat image:', error);
        btn.disabled = false;
    }
};
fetchCatImage();
btn.addEventListener('click', fetchCatImage);
});

document.addEventListener('DOMContentLoaded', function() {
const dogUrl = document.getElementById('dog-image');
const btn = document.getElementById('dog-button');
async function fetchDogImage() {
    btn.disabled = true;
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        console.log('Response received:', response);
        if(!response.ok) {
            console.log('There is no response.');
    }
        const data = await response.json();
        console.log(data);
        dogUrl.src = data.message;
        console.log(data.message);
        dogUrl.width = 400;
        dogUrl.height = 400;
        btn.disabled = false;
    } catch (error) {
        console.error('Error fetching dog image:', error);
        btn.disabled = false;
    }
};
fetchDogImage();
btn.addEventListener('click', fetchDogImage);
});