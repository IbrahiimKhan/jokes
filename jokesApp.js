const para = document.querySelector("h3")
const button = document.querySelector("button")
const category_wrapper = document.querySelector("#categories")
// getting the category
async function getCategory(){
    try {
    const catRes = await fetch("https://api.chucknorris.io/jokes/categories")
    const cat = await catRes.json()
    return cat
    } 
    catch (error) {
        return error
    }
}
// choosing random category
async function randomCategory (categories ) {
    let index =await Math.floor(Math.random()*categories.length)
       return categories[index]
}
//getting jokes
async function getJoke(category) {
    //console.log(category)
    const jokeData = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    const joke = await jokeData.json()
    const value = await joke.value
    return value
}
function showCategory(categories){
    const slicedCategory = categories.slice(1,6)
   // console.log(slicedCategory)
    slicedCategory.map(category => {
        category_wrapper.insertAdjacentHTML("afterbegin",`
        <option value="${category}">${category}</option>
        `)
    });
}
//get all category
async function allCategory() {
    const res = await fetch(`https://api.chucknorris.io/jokes/categories`)
    const category = await res.json()
    //const filterdCategory = category.slice(1,11)
    return category
}
async function jokesCatByUserChoise(e){
    const category = e.target.value
    const jokeData = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    const joke = await jokeData.json()
    const value = await joke.value
    para.textContent = value

}
async function run() {
    try {
    const categories =await getCategory()
    const ranCategory = await randomCategory(categories)
    //get all category
      //pushing categories into optoin ui
    const category =await allCategory()
    showCategory(category)
    const theJoke = await getJoke(ranCategory)
    para.textContent = theJoke
    } catch (error) {
        console.log(error)
    }

}
run()

document.addEventListener("DOMContentLoaded",run)
button.addEventListener("click",run)
// fetching userchoise
category_wrapper.addEventListener("change",jokesCatByUserChoise)




