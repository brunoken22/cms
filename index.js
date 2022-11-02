function mostrarResultados(datos) {
   let template = document.querySelector("#template");
   let contenidos = document.querySelector(".contenidos");
   
   for (let result of datos) {
      const articleImg = template.content.querySelector(".article-img");
      const articleTitle = template.content.querySelector(".article-title");
      const enlace = template.content.querySelector(".enlace");
      const clone = document.importNode(template.content, true);
      console.log(clone);
      articleTitle.textContent = result.fields.appMisPelis;
      articleImg.src = result.fields.linkImgPagina;
      enlace.href = result.fields.linkDeArticle;
      contenidos.appendChild(clone);
      contenidos.removeChild(contenidos.firstChild);
   }
}

function main() {
   fetch(
      "https://preview.contentful.com/spaces/dehbm7ub5p2i/environments/master/entries?access_token=Nc9wuQJ4_aK-N9OcKM8RKUNArEGoe_EUqrxeQ2e2s5Y"
   )
      .then(function (dato) {
         return dato.json();
      })

      .then(function (result) {
         mostrarResultados(result.items);
      });
}

main();
