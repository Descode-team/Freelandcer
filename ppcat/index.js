const nextIcon = '<img src="images/next-page.png"/>';
const prevIcon = '<img src="images/prev-page.png"/>';

$('#owl-custom-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

const nextIconProduct = '<img src="images/next-product.png"/>';
const prevIconProduct = '<img src="images/prev-product.png"/>';

$('#owl-custom-product').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    navText: [
        prevIconProduct,
        nextIconProduct
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1.5
        },
        1000: {
            items: 1.5
        }
    }
})

const nextIconNews = '<img src="images/next-product.png"/>';
const prevIconNews = '<img src="images/prev-product.png"/>';

$('#owl-custom-news').owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    autoplay: true,
    navText: [
        prevIconNews,
        nextIconNews
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3.5
        }
    }
})

const nextIconFooter = '<img src="images/next-page.png"/>';
const prevIconFooter = '<img src="images/prev-page.png"/>';

$('#owl-custom-footer').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    navText: [
        nextIconFooter,
        prevIconFooter
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 6
        }
    }
})

AOS.init();