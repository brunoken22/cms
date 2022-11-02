function mostrarResultados(datos) {
   let contenidos = document.querySelector(".contenidos");

   for (let result of datos) {
      let template = document.querySelector("#template");
      const articleImg = template.content.querySelector(".article-img");
      const articleTitle = template.content.querySelector(".article-title");
      const enlace = template.content.querySelector(".enlace");
      console.log(template);
      articleTitle.textContent = result.fields.appMisPelis;
      articleImg.src = result.fields.linkImgPagina;
      enlace.href = result.fields.linkDeArticle;
      let clone = document.importNode(template.content, true);
      contenidos.appendChild(clone);
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
         return mostrarResultados(result.items);
      });
}

main();
