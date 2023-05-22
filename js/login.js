"use strick";

addEventListener("click", (evt)=>{

    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");

    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");

//recuerar o cnteudo ds camos e adicionar em um objeto
//CRIANDO O OBJETO USUARIO-LOGADO
console.log('aaaaaaa')
const usuarioLogado = {
    nomeUsuarioLogado : inputUser.value,
    senhaUsuarioLogado : inputPass.value,
}

    if(evt.target.if =="btnSubmit" ){}
        // console.log("ACHEI O BOTAO")
    
        if(inputUser.value.length > 3 && inputPass.value.length > 3){
            // inputUser.setAttribute("style", "outline-color:#00ff00;")
            // inputPass.setAttribute("style", "outline-color:#00ff00;")
            labelUser.setAttribute("style","color:#00ff00;");
            labelPass.setAttribute("style","color:#00ff00;");

            //se preenheu a qtd de caracteries necesaria 
            //agora vamos valdiar o nomeUsuario e senhaUsuaio
            if(usuarioLogado.nomeUsuarioLogado == "tutu" && usuarioLogado.senhaUsuarioLogado =="123456"){
                alert("VALIDADO");
            }else(
                alert("NAO VALIDADO")
            )



        }else{
            labelUser.setAttribute("style","color:#ff0000;");
            labelPass.setAttribute("style","color:#ff0000;");
        }
    
})