TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
})

TweenMax.from(".logo", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".toggle-btn", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})



TweenMax.staggerFrom(".nav ul li", 1, {
    delay: 2.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
}, 0.2)


TweenMax.from(".side-strip", 2, {
    delay: 2.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})


TweenMax.from(".header h1", 2, {
    delay: 3.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".header h2", 2, {
    delay: 3.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".header p", 2, {
    delay: 3.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".header button", 2, {
    delay: 3.6,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})


// JavaScript for opening and closing the fullscreen overlay menu
var t1 = new TimelineMax({ paused: true });

// Animation for toggling the left menu
t1.to(".one", 0.8, {
    y: 6,
    rotation: 45,
    ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
    y: -6,
    rotation: -45,
    ease: Expo.easeInOut,
    delay: -0.8
});

t1.to(".menu", 1, {
    top: "0%",
    ease: Expo.easeInOut,
    delay: -0.6
});

t1.staggerFrom(".menu .data .line_detail ", 1, { x: -200, opacity: 0, ease: Expo.easeOut }, 0.2);

// Animation for toggling the white-overlay menu
var t2 = new TimelineMax({ paused: true });
t2.to(".white-overlay", 2, {
    height: "100%",
    ease: Expo.easeInOut,
    delay: -0.6,
    onStart: function() {
        // Reset styles before animation starts
        $(".white-overlay .social-media .handle").css({ x: 0, opacity: 1 });
        $(".white-overlay .location .line").css({ width: 0 });
        $(".white-overlay .location h4").css({ y: 0, opacity: 1 });
        $(".white-overlay .logo-name span").css({ y: 0, opacity: 1 });
        $(".white-overlay .social-media .circle").css({ scale: 1, opacity: 1 });
        $(".white-overlay .social-media h3").css({ x: 0, opacity: 1 });
        $(".white-overlay .button").css({ y: 0, opacity: 1 });
        $(".white-overlay .copy-right").css({ y: 0, opacity: 1 });
    }
});

// Animation for toggling the social-media content in the white-overlay menu
var t3 = new TimelineMax({ paused: true });

t3.staggerFrom(".white-overlay .logo-name", 1, { y: -20, opacity: 0, ease: Power2.easeInOut });
t3.staggerFrom(".white-overlay .location", 1, { y: -20, opacity: 0, ease: Power2.easeInOut });
t3.staggerFrom(".white-overlay .location .line", 1, { width: 0, ease: Power2.easeInOut }, "-=0.5");
t3.staggerFrom(".white-overlay .line2", 1, { width: 0, ease: Power2.easeInOut }, 0.2);
t3.staggerFrom(".white-overlay .social-media", 1, { y: -20, opacity: 0, ease: Power2.easeInOut });
t3.staggerFrom(".white-overlay .social-media h3", 1, { x: -20, opacity: 0, ease: Power2.easeInOut }, 0.2);
t3.staggerFrom(".white-overlay .button", 1, { y: -20, opacity: 0, ease: Power2.easeInOut });
t3.staggerFrom(".white-overlay .copy-right", 1, { y: -20, opacity: 0, ease: Power2.easeInOut });


// Reverse animations
t1.reverse();
t3.reverse();

// Toggle button functionality
$(document).on("click", ".toggle-btn", function() {
    // Toggle the left menu animation
    t1.reversed(!t1.reversed());
    $(".menu").toggleClass("open");
    $("body").toggleClass("no-scroll");

// Toggle the white-overlay menu animation
t2.reversed(!t2.reversed());
$(".white-overlay").toggleClass("open");
$("body").toggleClass("no-scroll");

// Toggle the white-overlay menu animation
$(".white-overlay").toggleClass("menu-open");

   // Toggle the class on the toggle button based on which menu is active
   $(".toggle-btn").toggleClass("overlay-active", $(".white-overlay").hasClass("menu-open"));

    // Toggle the social-media animation in the white-overlay menu
    t3.reversed(!t3.reversed());
});

$(document).on("click", "a", function() {
    // Reverse both animations when clicking on a link
    t1.reversed(!t1.reversed());
    t2.reversed(!t2.reversed());
    t3.reversed(!t3.reversed());
    $(".menu").toggleClass("open", false);
    $("body").removeClass("no-scroll");
    $(".white-overlay").toggleClass("menu-open", false);

    // Ensure toggle button color remains unchanged when the white overlay menu is closed
    $(".toggle-btn").removeClass("overlay-active");
});




 // GSAP for screen scroll

 gsap.utils.toArray('.wrapper').forEach((section, index) => {
    const height = section.offsetHeight;
    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${height}`,
        pin: true,
        pinSpacing: false,
        toggleActions: 'play none none reverse',
        scrub: true,
        onUpdate: self => {
            const progress = self.progress.toFixed(2); // Limit decimal places
            gsap.to(section.querySelector('video'), { filter: `brightness(${1 - progress})` }); // Darken video brightness as section scrolls
        }
    });
});
