let menuHamburger = document.querySelector(".menu-hamburger");
let menulateral = document.querySelector(".menu");
let botaoFecharMenu = document.querySelector(".btn-close");
let botoesSecao = document.querySelectorAll(".btn-secao");
let botaoPrimarioSecao = document.querySelector("#botao-primario-secao");
let botoesSeguir = document.querySelectorAll(".btn-seguir");
let botaoDarkMode = document.querySelector("#switchDarkMode");

console.log(botaoDarkMode);

botaoDarkMode.addEventListener("change",function(){
    let status = this.checked;

    if(status === true){
        document.body.classList.add("dark-mode");
        document.querySelector(".secao-de-menu-top").style.backgroundColor = "grey"
        document.querySelector(".menu-footer").style.backgroundColor = "transparent"
    }else{
        document.body.classList.remove("dark-mode");
        document.querySelector(".secao-de-menu-top").style.backgroundColor = "#fff"
        document.querySelector(".menu-footer").style.backgroundColor = "#fff"
    }
});
botoesSeguir.forEach(botaoseguir =>{
    botaoseguir.addEventListener("click",function(){
        botaoseguir.classList.toggle("botao-seguir-ativo");
        botaoseguir.innerHTML = "Seguindo"

        if(botaoseguir.classList.contains("botao-seguir-ativo")){
            botaoseguir.innerHTML = 'Seguindo <i class="fa-solid fa-check"></i>'
        }else{
            botaoseguir.innerHTML = "Seguir"
        }
    })

});

botaoPrimarioSecao.classList.add("botao-ativo");

botoesSecao.forEach(button => {
    button.addEventListener("click",function(){
        botoesSecao.forEach(btn => btn.classList.remove("botao-ativo"));
        this.classList.add("botao-ativo");
    })
});


menuHamburger.addEventListener("click",function(){
    menulateral.style.display = "block";
    setTimeout(function(){
        menulateral.classList.add("ativo");
    },100)
});
botaoFecharMenu.addEventListener("click",function(){
        menulateral.classList.remove("ativo");
        setTimeout(function(){
            menulateral.style.display = "none";
        },400)
});


$(document).ready(function(){
    $(document).ready(function(){
    var $slickElement = $('.carrosel');
    var $progressBar = $('.progress-bar');

    $slickElement.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide + 1) / slick.slideCount ) * 100;
        
        $progressBar.css('width', calc + '%');
    });

    $slickElement.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    });

            var startCalc = ( 1 / $slickElement.slick('getSlick').slideCount ) * 100;
            $progressBar.css('width', startCalc + '%');
});
            $('.carrosel').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows:false,
                responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2
            }
    },
    {
                breakpoint: 480,
                settings: {
                slidesToShow: 2
    }
    }
    ]
});
});