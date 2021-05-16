
const jokes = document.querySelector('#jokes');
const jokeButton = document.querySelector('#jokeButton');



const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI')
    newLI.append(jokeText);
    jokes.append(newLI);
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return "Something went wrong"
    }
}

jokeButton.addEventListener('click', addNewJoke)