const stickyNav = document.querySelector('.fixed-header');
const defaultNav = document.querySelector('.default-header')
const scrollThreshold = 100;

// 监听页面滚动事件
window.addEventListener('scroll', function () {
    // 获取当前滚动距离
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // 判断：滚动距离超过阈值，添加激活类，触发滑入动画
    if (scrollTop > scrollThreshold) {
        stickyNav.classList.add('active');
    } else {
        // 滚动回阈值内，移除激活类，触发滑出动画
        stickyNav.classList.remove('active');
    }
});

const toTopBtn = document.querySelector('#fixed-header-logo')

toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/*制作轮播图*/
const carousel = document.querySelector('.carousel')
const slidesContainer = document.querySelector('.slides')
const slides = document.querySelectorAll('.slides img')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
let currentIndex = 0
const slidesWidth = slides[0].clientWidth//获取单张图片长度
const dots = document.querySelectorAll('.dot')

//实现该方案的核心函数，通过计算图片长度来决定容器移动距离，达到显示想要图片的效果
function updateCarousel() {
    const offset = -currentIndex * slidesWidth
    slidesContainer.style.transform = `translateX(${offset}px)`

    dots.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.add('active')
        }
        else {
            dot.classList.remove('active')
        }
    });
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel()
    })
})

//自动轮播
let interval = setInterval(nextSlides, 4000)
carousel.addEventListener('mouseenter', () => {
    clearInterval(interval)
})
carousel.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlides, 4000)
})


function nextSlides() {
    currentIndex = (currentIndex + 1) % slides.length
    updateCarousel()
}

function prevSlides() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    updateCarousel()
}

nextBtn.addEventListener('click', nextSlides)
prevBtn.addEventListener('click', prevSlides)

updateCarousel()

/*下拉列表*/
const navitems = document.querySelectorAll('.navitem')

navitems.forEach(item =>{
    const dropdown = item.querySelector('.dropdown')
    if(!dropdown) return // 防止没有dropdown的元素报错

    item.addEventListener('mouseenter',()=>{
        dropdown.classList.add('show')
    })

    item.addEventListener('mouseleave',()=>{
        dropdown.classList.remove('show')
    })
})

const categoryitems = document.querySelectorAll('.categoryitem')

categoryitems.forEach(item =>{
    const dropdownLeft = item.querySelector('.dropdown-left')
    if(!dropdownLeft) return // 防止没有dropdown的元素报错

    item.addEventListener('mouseenter',()=>{
        dropdownLeft.classList.add('show')
    })

    item.addEventListener('mouseleave',()=>{
        dropdownLeft.classList.remove('show')
    })
})