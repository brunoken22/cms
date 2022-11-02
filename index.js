function mostrarResultados(datos) {
   const template = document.querySelector("#template");
   const contenidos = document.querySelector(".contenidos");

   for (let result of datos) {
      const clone = document.importNode(template.content, true);
      const articleImg = template.content.querySelector(".article-img");
      const articleTitle = template.content.querySelector(".article-title");
      contenidos.appendChild(clone);
      contenidos.removeChild(contenidos.firstChild);
      articleTitle.textContent = result.fields.appMisPelis;
   }
   console.log(contenidos);
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
