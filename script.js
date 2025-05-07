let btn  = document.querySelector("#inbotao");
let imagem = document.querySelector("#infoto");
let texto = document.querySelector("#intexto");
imagem.style.display = "none";


btn.addEventListener("click", ()=>{
   if(imagem.style.display === "none"){
   imagem.style.display = "flex";
   texto.innerHTML = "";
}
else
   {
      imagem.style.display= "none";
      texto.innerHTML = "Bem vindo ao projeto SolarMobil";
   }
})