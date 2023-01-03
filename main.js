gsap.to(".cercle",
    {
        duration: 1,
        background: "orange",
        boxShadow: "0 0 20px rgba(245, 229, 5, 0.459)",
        delay: (0.23 * 15) + 1,
        scale: 1,
        stagger: {
            each: .3,
            repeat: -1,
            yoyo: true,
            // from : "start",
        },
    }
)
gsap.to(".lettre",
    {
        ease: "bounce",
        opacity: 1,
        duration: 1,
        delay: 1,
        y: 0,
        stagger: {
            each: .2,
            yoyo: true,
        },
    }
)