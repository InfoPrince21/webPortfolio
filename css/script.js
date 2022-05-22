
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

// $(function() {
//     $(window).scroll(function() {
//         let scrollpos = ($(document).height() - $(window).height() - $(window).scrollTop() ) ;
    
//         $('.bg').css({
//             'opacity': + (scrollpos/25) + '%'
//         })
//         console.log(scrollpos/25)
//     })

//  });


 $(function() {
    $(window).scroll(function() {
        let scrollpos = ($(window).scrollTop());
        $('.bg').css({
            'opacity': + (scrollpos) + '%'
        })
        //console.log(scrollpos)
    })

 });

 
$(function() {
    
    let $animate = $(".animate");
    let $win = $(window);

    $win.on('scroll', function () {
        let top = $win.scrollTop() / 29;
        $animate.css('transform', 'skewX(' + top + 'deg) ');
    })

 });