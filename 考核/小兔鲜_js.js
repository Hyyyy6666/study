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

        const carsouelContainer = document.querySelector('.carsouel-body')
        const carsouels = document.querySelectorAll('.carsouel img')
        const nextBtn = document.querySelector('.carousel-btn-next')
        const prevBtn = document.querySelector('.carousel-btn-pre')
        let currentIndex = 0

        const carsouelWide = carsouels[0].clientWidth//获取单张图片长度
        const carsouel = document.querySelector(".carsouel")

        function  updateCarsouel(){
            const offset = -currentIndex*carsouelWide
            carsouelWide.style.transform = `translateX(${offset}px)`
        }

        let internal = setInterval(nextcarsouel,3000)
        carsouel.addEventListener('mouseenter',()=>{
            clearInterval(internal)
        })
        carsouel.addEventListener('mouseleave',()=>{
            internal = setInterval(nextBtn,3000)
        })

        function nextBtn(){
           currentIndex = (currentIndex + 1)%slides.length
        updateCarousel()
        }

        function prevBtn(){
           currentIndex = (currentIndex - 1 + carsouels.length)%carsouels.length
            updateCarousel()
        }

        nextBtn.addEventListener('click',nextBtn)
        prevBtn.addEventListener('click',prevBtn)

        updateCarousel()