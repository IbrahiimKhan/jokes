{/* <div id="jokes" class="jokes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius modi commodi ducimus repellendus. Nihil consequatur itaque cum et aspernatur eos, magni laborum exercitationem dolorem praesentium harum, totam voluptate assumenda.</div>
<button class="btn" id="jokesBtn">Load joke</button> */}

const jokesBtn = document.querySelector("#jokesBtn")
const jokes = document.querySelector("#jokes")

const getJokes = async ()=>{
    try {
        const setHeaders ={
            headers:{
                Accept:"application/json"
            }
        }
        const res =await fetch("https://icanhazdadjoke.com/",setHeaders)
        const data = await res.json()
        jokes.innerHTML = data.joke
    } catch (error) {
        console.log(error);
    }
}
jokesBtn.addEventListener("click",getJokes)
getJokes()