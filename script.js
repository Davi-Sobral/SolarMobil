let btn  = document.querySelector("#inbotao");
let imagem = document.querySelector("#infoto");
imagem.style.display = "none";

btn.addEventListener("click", (e)=>{
   if(imagem.style.display=== "none"){
   imagem.style.display = "flex";
}
else
   {
      imagem.style.display= "none";
   }
})