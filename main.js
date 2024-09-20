const jokeText = document.querySelector("#joke-text");
const copyBtn = document.querySelector("#copyBtn");
const randomJokeBtn = document.querySelector("#randomJokeBtn");

// function
const randomJoke = () =>{
    const r = Math.floor(Math.random() * (jokes.length - 1))
    console.log(jokes[r]);
    return jokes[r];
}
randomJoke()
// random jokes 
randomJokeBtn.addEventListener("click",()=>{
      jokeText.innerText = randomJoke();
})
// Copy 
copyBtn.addEventListener("click" , ()=>{
  let jokeHtmlText = jokeText.innerText
    navigator.clipboard.writeText(jokeHtmlText);
    copyBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    console.log("Copied");
  setTimeout(
    () => (copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`),
    1000
  );
})