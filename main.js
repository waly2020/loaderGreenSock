const trY = 30;
const time = 0.6;
const direction = "start";
const delai = (0.23 * 15) + 1;
gsap.to(".cercle",
    {
        duration: time,
        y: -(trY),
        delay: delai,
        scale: 1,
        stagger: {
            each: .3,
            repeat: -1,
            yoyo: true,
            from: direction,
        },
        onUpdate: () => {
            document.querySelectorAll(".loader").forEach(item => {
                item.classList.add("active");
            })
        }
    }
)
gsap.to(".shadow",
    {
        duration: time,
        y: trY,
        opacity: 0,
        delay: delai,
        scale: 1,
        stagger: {
            each: .3,
            repeat: -1,
            yoyo: true,
            from: direction,
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
gsap.to(".lettre",
    {
        duration: 3,
        delay: 1,
        // y: 2,
        // color: "#555",
        // rotate: 3,
        opacity: 0,
        delay: delai + 5,
        stagger: {
            each: .7,
            yoyo: true,
            repeat: -1,
        },
    }
)