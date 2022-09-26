fetchMain().catch(error =>{
    return error;
});
async function fetchMain(){
    let response = await fetch("https://swapi.dev/api/people");
    let data = await response.json();
    let items = data.results;

    let resultDiv = document.querySelectorAll('#result');
    console.log(resultDiv);

    items.forEach((item,index) => {
        let star =''
        star= `
        <p class="toggleStarButton">${item.name}</p>
        <div class="innerDiv ">
            <p class="name"> ${item.name}</p>
            <p class="gender"> ${item.gender}</p>
            <p class="height">${item.height}</p>
        <div>
       
        `
        resultDiv[index].innerHTML = star;
    });

    let toggleStarButton = document.querySelectorAll('.toggleStarButton');
       console.log(toggleStarButton);
       let innerDiv = document.querySelectorAll('.innerDiv');
       console.log(innerDiv);

       toggleStarButton.forEach((item, index) => item.addEventListener('click', ()=> {
            innerDiv[index].classList.toggle('showDiv');
       }))
    }
   
fetchMain();

module.exports = { main }
