
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
// //Math.round

// function mudaCor() {


//     let r = 0;
//     let g = 0;
//     let b = 0;

//     r = Math.round(Math.random() *255);
//     g = Math.round(Math.random() *255);
//     b = Math.round(Math.random() *255);

//     const cabecalho = document.querySelector(".cabecalho")
//     cabecalho.style.backgroudColor = `rgb(${r}, ${g}, ${b})`;

//     tmp = setTimeout(mudaCor, 1000)
// }
// mudaCor();





// function mudaBanner(){
//     const imgElement = document.querySelector('.banner-1 img');
//     let nr = Math.ceil(Math.random() *3);
//     imgElement.src=`./img/banner-lateral-${nr}.png`;

//     const imgElement2 = document.querySelector('.banner-2 img');
//     nr = Math.ceil(Math.random() *3);
//     imgElement2.src = `./img/banner-lateral-${nr}.png`;

//     setTimeout(mudaBanner, 2000);
// }
// mudaBanner();

const botao = document.querySelector("button");
// console.log(botao);

botao.addEventListener('click', function(){
    if(this.textContent == 'LIGAR'){
        const imgElement = document.querySelector('img[alt="lampada apagada"]')
        imgElement.src = "./img/pic_bulbon.gif";
        imgElement.alt = "Lampada acesa";
        this.textContent = "DESLIGAR"
    }else{
        const imgElement = document.querySelector('img[alt="lampada acesa"]')
        imgElement.src = "./img/pic_bulboff.gif";
        imgElement.alt = "Lampada apagada";
        this.textContent = "LIGAR"
    }
});