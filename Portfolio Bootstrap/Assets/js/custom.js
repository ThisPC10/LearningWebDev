gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();

        tl.from('.navLoadAnim', {
            y: '-30%',
            opacity: 0,
            duration: .5,
            easing: Power4.easeOut
        })

        tl.from('.carouselLoadAnim', {
            y: '-30%',
            opacity: 0,
            duration: 1,
            easing: Power4.easeOut
        })

        tl.from('.stagger1', {
            opacity: 0,
            y: -50,
            stagger: .3,
            easing: Power4.easeOut,
            duration: 2
        }, "-=1.5")

        gsap.from('.fab', {
            scrollTrigger: {
                trigger: '#content-start',
                start: 'center bottom'
            },
            opacity: 0,
            duration: .5,
            scale: .1,
        }, "-=.2")


        gsap.from('.transition2', {
            scrollTrigger: {
                trigger: '.transition2',
                start: 'top bottom'
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        })

        gsap.from('.transition3', {
            scrollTrigger: {
                trigger: '.transition3',
                start: 'top bottom'
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        })

        gsap.from('.transition4', {
            scrollTrigger: {
                trigger: '.transition4',
                start: 'top bottom'
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        })

        gsap.from('.transition5', {
            scrollTrigger: {
                trigger: '.transition5',
                start: 'top bottom'
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
        })
