$(document).ready(function(){

    $('#btnSend').click(function(){

        let errores = '';

        // Validando Nombre ===========================================
        if($('#names').val() == ''){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        }else{
            $('#names').css("border-bottom-color", "#D1D1D1")
        }
        // Validando Correo ===========================================
        if($('#email').val() == ''){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        }else{
            $('#email').css("border-bottom-color", "#D1D1D1")
        }
        // Validando Mensaje ===========================================
        if($('#mensaje').val() == ''){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        }else{
            $('#mensaje').css("border-bottom-color", "#D1D1D1")
        }

         // Enviando Mensaje ===========================================
         if(errores == '' == false){
             let mensajeModal = '<div class="modal_wrap">' +
                                     '<div class="mensaje_modal">' + 
                                        '<h3>Campos Incorrectos / Vacios</h3>' +
                                        errores +
                                        '<span id="btnClose">Cerrar</span>' +
                                     '</div>' + 
                                '</div>'

            $('body').append(mensajeModal)
         }

         // CERRANDO MODAL ===========================================
         $('#btnClose').click(function(){
             $('.modal_wrap').remove();
         });


    });

    let altura = $('.menu').offset().top;
    $(window).on('scroll', function(){
        if($(window).scrollTop() > altura){
            $('.menu').addClass('menu-fixed');
        }else{
            $('.menu').removeClass('menu-fixed');
        }
    });

    // ABRIR MENU
    let Contador = 1;
    $('#btn_menu').click(function(){
        if(Contador == 1){
            $('ul').animate({
                left: '0'
            });
            Contador = 0;
        }else{
            Contador = 1;
            $('ul').animate({
                left: '-100%'
            });
        }
    });

    //cerrar();

});


/*function cerrar(){
    const menu_close1 = document.getElementById('cerrar1');
    const menu_close2 = document.getElementById('cerrar2');
    const menu_close3 = document.getElementById('cerrar3');
    const menu_close4 = document.getElementById('cerrar4');
    const menu_close5 = document.getElementById('cerrar5');
    const menu_close6 = document.getElementById('cerrar6');
    // primer li
    if(menu_close1){
        menu_close1.addEventListener('click', () => {
            const menu = document.getElementById('menu_items');
            menu.classList.toggle('show');
        })
    }
    // segundo li
    if(menu_close2){
        menu_close2.addEventListener('click', () => {
            const menu = document.getElementById('menu_items');
            menu.classList.toggle('show');
        })
    }

    // tercer li
    if(menu_close3){
        menu_close3.addEventListener('click', () => {
            const menu = document.getElementById('menu_items');
            menu.classList.toggle('show');
        })
    }

    // cuarto li
    if(menu_close4){
        menu_close4.addEventListener('click', () => {
            const menu = document.getElementById('menu_items');
            menu.classList.toggle('show');
        })
    }

    // quinto li
    if(menu_close5){
        menu_close5.addEventListener('click', () => {
            const menu = document.getElementById('menu_items');
            menu.classList.toggle('show');
        })
    }

    // sexto li
    if(menu_close6){
        menu_close6.addEventListener('click', () => {
            const menu = document.getElementById('menu_items');
            menu.classList.toggle('show');
        })
    }
}*/