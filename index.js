function main(){
   const template = document.querySelector("#template")
   const contenidos = document.querySelector(".contenidos")

   const clone = document.importNode(template.content,true)
   contenidos.appendChild(clone)
}

main()