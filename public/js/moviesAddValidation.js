window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//    

    console.log(' succsess!!');

    /* formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("el formulario no se envio");
    }) */
    let inputTitle = document.querySelector('#title')
    let form = document.querySelector('form') // verificar que sea el unico formulario en esa vista. 
   
    let error = false; // asumo que no hay errores

    form.addEventListener('submit', (e) => {

        e.preventDefault();
        let elements = form.elements;
        for (let i = 0; i < elements.length - 1; i++) {
          
            if (!elements[i].value) {

                error = true // hay errores
                elements[i].classList.add('is-invalid')

            } else {
                elements[i].classList.remove('is-invalid')
            }
        }
        if (!error) { // si no hay errores

            e.target.submit() // busco donde se genero el evento y envio el formulario
        } else {

            console.log("Aun hay campos vacios");
        }


    })


    console.log(form.elements);

    // focus en el input titulo.
   
    inputTitle.focus();



}