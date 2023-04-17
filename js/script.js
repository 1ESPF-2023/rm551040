
//recuperando o botão com o getElementById
const botão = document.getElementById("btn-1");

//Recuperar um item especifico com a 
//função querySelector(parâmetro)
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

//recuperar uma lista d eelementos com a função
//querySelectorsAll
const seletores = document.querySelectorAll("li");

seletores.forEach((item)=>{
    
    if (item.textContent == "Item-15") {
        let meuItem = item;
        console.log(`Items selecionados : ${item.textContent}`);
        meuItem.textContent = "TÁ DOMINADO!"
    }

})

//setTimeout
//setInterval
//Random
//Mah.Ceil
//Math.Random 
//Math.Floor