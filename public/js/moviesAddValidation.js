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

    let form = document.querySelector('#form') // verificar que sea el unico formulario en esa vista. 
    let errores= document.querySelector('.errores')
    let inputTitle = document.querySelector('#title') // captuto el input con el id titulo para luego hacerle foco al cargar la pagina.
    let inputRating = document.querySelector('#rating');
    let inputReleaseDate = document.querySelector('#release_date') 
    let inputAwards= document.querySelector('#awards')
    let inputLength = document.querySelector('#length')
    let selectGenre = document.querySelector('#genre_id') 



       //  Le doy focus en el input con el id  titulo.
       inputTitle.focus();

    //capturo los inputs individualmente y los valido
   
    inputTitle.addEventListener('blur',function(){
    if(!this.value){
        document.querySelector('.errorTitle').innerHTML = 'El campo titulo no puede estar vacío'
        this.classList.add('is-invalid')
        }else{
            document.querySelector('.errorTitle').innerHTML = null
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
        }
   })

   inputRating.addEventListener('blur',function(){
    if(!this.value){
        document.querySelector('.errorRating').innerHTML = 'El campo rating no puede estar vacío'
        this.classList.add('is-invalid')
    }else{
        document.querySelector('.errorRating').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.add('is-valid')
    }
    
   })

   inputReleaseDate.addEventListener('blur',function(){
    if(!this.value){
        document.querySelector('.errorRelease_date').innerHTML = 'El campo release date no puede estar vacío'
        this.classList.add('is-invalid')
        }else{
            document.querySelector('.errorRelease_date').innerHTML = null
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
        }
   })

   inputAwards.addEventListener('blur',function(){
    switch (true) {
        case !this.value:
            
             document.querySelector('.errorAwards').innerHTML = 'El campo awards no puede estar vacío'
             this.classList.add('is-invalid')
            
            break;
        
        case this.value < 0 || this.value > 10:
           
             document.querySelector('.errorAwards').innerHTML = 'Los premios deben ser entre 0 y 10'
             this.classList.add('is-invalid')
             
             break;

        default:
            document.querySelector('.errorAwards').innerHTML = null
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            break;
    }

   })

   inputLength.addEventListener('blur',function(){

    switch (true) {
        case !this.value:
            
             document.querySelector('.errorLength').innerHTML = 'El campo length no puede estar vacío'
             this.classList.add('is-invalid')
            
            break;
        
        case this.value < 60 || this.value > 360:
           
             document.querySelector('.errorLength').innerHTML = 'La duracion debe ser entre 60 y 360'
             this.classList.add('is-invalid')
             
             break;

        default:
            document.querySelector('.errorLength').innerHTML = null
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            break;
    }

   })

   selectGenre.addEventListener('blur',function(){
    if(!this.value){
        document.querySelector('.errorGenre').innerHTML = 'El campo genre no puede estar vacío'
        this.classList.add('is-invalid')
    }else{
        
        document.querySelector('.errorGenre').innerHTML = null
        this.classList.remove('is-invalid')
        this.classList.add('is-valid')
    }
   })

   
   // capturo el formulario

    form.addEventListener('submit', function(e){

        e.preventDefault()// prevengo el envio del form
      
     
        let elements = form.elements

        let error = false;

         for(let i = 0; i < elements.length -1; i++) {
          
        
            if(elements[i].classList.contains('is-invalid') || !elements[i].value){

                error = true
            }
      
        }

        
        if(!error) { // si no hay errores

           form.submit() // busco donde se genero el evento y envio el formulario
            console.log(e.target);
        } else {

           errores.innerHTML =`<li class="alert-warning">Tenes errores</li>`

        }


    })


    

 



}