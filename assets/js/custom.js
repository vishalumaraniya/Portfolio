$(document).ready(function () {
    $(document).on('click', '.nav-link', function () {
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
    })

    const links = $('.nav-link')
    const sections = $('section')
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                Array.prototype.forEach.call(links,element => {
                   if($(element).attr('href') === `#${entry.target.id}`){
                    $(links).removeClass('active')
                    $(element).addClass('active')
                   }
                });
            }
        })
    },{
        threshold:0.5
    })
  
    Array.prototype.forEach.call(sections,element => {
        observer.observe(element);
    });

    data = [
        { 
            text: '"If you think math is hard, try web design."'  
        },{ 
            text: '"Have no fear of perfection—you will never reach it."'
        },{ 
            text: '"A user interface is like a joke. If you have to explain it, it is not that good."'
        },{ 
            text: '"Designers are meant to be loved, not to be understood."'
        },{ 
            text: '"We don’t just build websites, we build websites that SELLS."'
        },{ 
            text: '"What separates design from art is that design is meant to be... functional."'
        },
    ]
    
   
    let i = 0;
    let textNumber = 0;
    let char = 0;
    function typewriter(){
     
            let type = data[textNumber].text + '                                      ';
            if(type.length > i){
                $('#home .type').append(type.charAt(i))
            }
            else{
                char = type.slice(0,((type.length - 1) - i))
                $('#home .type').html('')
                $('#home .type').append(char)
                if(char.length == 0){
                    ++textNumber
                    if(textNumber == data.length){
                        textNumber = 0;
                    }
                    console.log(data[textNumber].text)
                    i = char.length - 1;    
                }
            }
            i++;
        }

setInterval(typewriter, 50)
$('.project-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    arrows: true,
    autoplay: false,
    // initialSlide: 1,
    pauseOnHover: false,
    asNavFor: '.project-name-slider',
    responsive: [{
        breakpoint: 767,
        settings:{
            
            slidesToShow: 1,
            centerMode: true,
            arrows: false
        }
    }
    ]
  });
$('.project-name-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    // centerMode: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    asNavFor: '.project-slider',
    // fade: true
  });

  const $cards = document.querySelectorAll('.skill-card');
  $cards.forEach(skillcard => {
    skillcard.addEventListener('mouseenter',function(){
        bounds = skillcard.getBoundingClientRect();
        console.log(bounds)
        skillcard.addEventListener('mousemove', function(e){
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            }
            const distance = Math.sqrt(center.x**2 + center.y**2);
            skillcard.style.transform = `
     scale3d(1.07, 1.07, 1.07)
     rotate3d(
       ${center.y / 100},
       ${-center.x / 100},
       0,
       ${Math.log(distance)* 2}deg
     )
   `;
  
   skillcard.querySelector('.glow').style.backgroundImage = `
     radial-gradient(
       circle at
       ${center.x * 2 + bounds.width/2}px
       ${center.y * 2 + bounds.height/2}px,
       #ffffff55,
       #0000000f
     )
   `;
            
        });
    })
  })
$cards.forEach(skillcard=>{
    skillcard.addEventListener('mouseleave',function(){
            skillcard.style.transform = '';
            skillcard.style.background = '';
    
    })
})

});

