/*顶部导航栏的下拉菜单*/
const topnavItem = document.querySelectorAll(".app-header-nav-item")

topnavItem.forEach(item => {
    const layer = item.querySelector(".layer")

    item.addEventListener("mouseenter", () => {
        layer.classList.add('show')
    })

    item.addEventListener('mouseleave', () => {
        layer.classList.remove('show')
    })
})


/*header部分导航栏和吸顶导航栏互换功能*/
const stickyNav = document.querySelector("#app-header-sticky")
const scrollThreshold = 70;/*定义替换导航的距离*/

window.addEventListener('scroll', () => {
    //获取当前页面滚动距离
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    //滚动阈值外，触发active类，触发动画
    if (scrollTop > scrollThreshold) {
        stickyNav.classList.add('active')
    } else {
        // 滚动回阈值内，移除激活类
        stickyNav.classList.remove('active')
    }
})

/*点击logo图标返回顶部功能：与导航互换功能类似，都用到：window.pageYOffset || document.documentElement.scrollTop获取网页滚动距离*/

const toTop = document.querySelector('#app-header-sticky-totop')

toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

/*轮播图*/
const carousel = document.querySelector(".carousel")
const carouselContainer = document.querySelector(".carousel-body")
const carousels = document.querySelectorAll(".carousel-item")
let currentIndex = 0
const total = carousels.length
const nextBtn = document.querySelector('.carousel-btn-next')
const prevBtn = document.querySelector('.carousel-btn-prev')
const indicators = document.querySelectorAll('.carousel-indicator span')


function updateCarousel() {
    const offset = -currentIndex * 100
    carouselContainer.style.transform = `translateX(${offset}px)`

    indicators.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.add('active')
        }
        else {
            dot.classList.remove('active')
        }
    })

}

let interval = setInterval(nextCarousels, 3000)
carousel.addEventListener('mouseenter', () => {
    clearInterval(interval)
})
carousel.addEventListener('mouseleave', () => {
    interval = setInterval(nextCarousels, 3000)
})

function nextCarousels() {
    currentIndex = (currentIndex + 1) % total
    updateCarousel()
}

function prevCarousels() {
    currentIndex = (currentIndex - 1 + total) % total
    updateCarousel()
}

nextBtn.addEventListener('click', nextCarousels)
prevBtn.addEventListener('click', prevCarousels)

indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i
        updateCarsouel()
    })
})

updateCarousel()