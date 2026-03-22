document.addEventListener('DOMContentLoaded', function() {
    const jokeText = document.getElementById('joke-text');
    const jokeButton = document.getElementById('joke-button');

    async function fetchJoke() {
        jokeButton.disabled = true;
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            console.log('Response received:', response);
            if(!response.ok) {
                console.log('There is no response.');
        }

            const data = await response.json();
            console.log(data);
            jokeText.textContent = ` ${data.type}- ${data.id}: ${data.setup} - ${data.punchline}`;
            jokeButton.disabled = false;
        } catch (error) {
            console.error('Error fetching joke:', error);
            jokeText.textContent = 'Failed to load joke. Please try again.';
        }
        jokeButton.disabled = false;
    
    };
    fetchJoke();
    jokeButton.addEventListener('click', fetchJoke);
});