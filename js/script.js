
// //recuperando o botão com o getElementById
// const botão = document.getElementById("btn-1");

// //Recuperar um item especifico com a 
// //função querySelector(parâmetro)
// // const seletor = document.querySelector("li")
// // console.log(seletor.textContent)

// //recuperar uma lista d eelementos com a função
// //querySelectorsAll
// const seletores = document.querySelectorAll("li");

// seletores.forEach((item)=>{
    
//     if (item.textContent == "Item-15") {
//         let meuItem = item;
//         console.log(`Items selecionados : ${item.textContent}`);
//         meuItem.textContent = "TÁ DOMINADO!"
//     }

// })

// //setTimeout
// //setInterval
// //Random
// //Mah.Ceil
// //Math.Random 
// //Math.Floor

function mudaCor() {


    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);

    const cabecalho = document.querySelector(".cabecalho")
    cabecalho.style.backgroudColor = `rgb(${r}, ${g}, ${b})`;

    tmp = setTimeout(mudaCor, 1000)
}
mudaCor();





function mudaCor() {


    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);

    const banner1 = document.querySelector(".banner-1")
    banner1.style.backgroudColor = `rgb(${r}, ${g}, ${b})`;

    tmp = setTimeout(mudaCor, 1000)
}
mudaCor();




function mudaCor2() {


    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);

    const banner2 = document.querySelector(".banner-2")
    banner2.style.backgroudColor = `rgb(${r}, ${g}, ${b})`;

    tmp = setTimeout(mudaCor2, 1000)
}
mudaCor2();