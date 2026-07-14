// 顶部下拉导航栏效果
document.addEventListener('DOMContentLoaded',function(){
    const listWrap = document.querySelector('.navDropdown-list');
    const leftBtn = document.querySelector('.navLeftBtn');
    const rightBtn = document.querySelector('.navRightBtn');
    let scrollOffset = 0;
    // 单张卡片宽度 + gap间隙 总和，和css卡片尺寸对应：200 + 10
    const singleWidth = 210;

    rightBtn.addEventListener('click', () => {
        scrollOffset -= singleWidth;
        listWrap.style.transform = `translateX(${scrollOffset}px)`;
    });
    leftBtn.addEventListener('click', () => {
        if (scrollOffset >= 0) return;
        scrollOffset += singleWidth;
        listWrap.style.transform = `translateX(${scrollOffset}px)`;
    });
})

// 弹窗搜索框
let btnSearch = document.querySelector(".search")
let alertSearch = document.querySelector(".alert-search")
let alertSearchClose = document.querySelector(".alert-search .close")
btnSearch.addEventListener("click", function () {
    alertSearch.style.display = ""
    document.body.parentNode.style.overflowY = "hidden"
})
alertSearchClose.addEventListener("click", function () {
    alertSearch.style.display = "none"
    alertSearch.querySelector("input").value = ""
    document.body.parentNode.style.overflowY = ""
})

//entry部分的侧边列表
const categoryitems = document.querySelectorAll('.categoryitem')

categoryitems.forEach(item => {
    const dropdown = item.querySelector('.dropdown')
    if(!dropdown) return // 防止没有dropdown的元素报错

    item.addEventListener('mouseenter',function(){
        dropdown.classList.add('show')
    });

    item.addEventListener('mouseleave',function(){
        dropdown.classList.remove('show')
    });


});

//entry部分轮播图
const sliderData = [
    {url: '../update/banner_1.jpg'},
    {url:'../update/banner_2.jpg'},
    {url:'../update/banner_3.jpg'},
    {url:'../update/banner_4.jpg'},
    {url:'../update/banner_5.jpg'}
]
const entry = document.querySelector('.entry')

let i = 0
let n = setInterval(function(){
    i++
    if(i >= sliderData.length){
        i = 0
    }

    entry.style.backgroundImage = "url(" + sliderData[i].url + ")"

    document.querySelector('.line .active').classList.remove('active')
    document.querySelector(`.line li:nth-child(${i + 1})`).classList.add('active')
},4000);


//v秒杀部分倒计时
(function () {
    function getNewTime() {
        const now = +new Date()

        const next = +new Date('2026/7/1 23:59:59')

        const count = (next - now) / 1000

        let h = parseInt(count / 60 / 60 % 24)
        h = h < 10 ? '0' + h : h
        let m = parseInt(count / 60 % 60)
        m = m < 10 ? '0' + m : m
        let s = parseInt(count % 60)
        s = s < 10 ? '0' + s : s

        document.querySelector('#hour').innerHTML = h
        document.querySelector('#minutes').innerHTML = m
        document.querySelector('#scond').innerHTML = s
    }

    getNewTime()

    setInterval(getNewTime, 1000)
})();


//v秒杀部分轮播图
function initGoodCarousel() {
    const goodsList = document.querySelector('.goods-list')
    const leftBtn = document.querySelector('.left-btn')
    const rightBtn = document.querySelector('.right-btn')
    const goodsView = document.querySelector('.goods-view')
    const moveDistance = goodsView.clientWidth
    let pageIndex = 0

    function updateGoodsView() {
        const offset = -pageIndex * moveDistance
        goodsList.style.transform = `translateX(${offset}px)`
    }

    rightBtn.addEventListener('click', function () {
        const maxPage = Math.floor((goodsList.scrollWidth - moveDistance) / moveDistance)
        pageIndex = (pageIndex + 1) % (maxPage + 1)
        updateGoodsView()
    })

    leftBtn.addEventListener("click", function () {
        const maxPage = Math.floor((goodsList.scrollWidth - moveDistance) / moveDistance)
        pageIndex = (pageIndex - 1 + maxPage + 1) % (maxPage + 1)
        updateGoodsView()
    })

    updateGoodsView()
}

initGoodCarousel();

//返回顶部按钮
(function () {
        const entry = document.querySelector('.entry')
        const elevator = document.querySelector('.vivo-elevator')
        const backTop = document.querySelector('#backTop')

        window.addEventListener('scroll', function (){
            const n = document.documentElement.scrollTop
            elevator.style.opacity = n >= entry.offsetTop ? 1 : 0
        })

        backTop.addEventListener('click', function () {
            document.documentElement.scrollTop = 0
        })
})();

//电梯导航栏
(function () {
    const list = document.querySelector('.vivo-elevator-list')

    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.dataset.name) {
            const old = document.querySelector('.vivo-elevator-list .active')
            if (old) old.classList.remove('active')
            e.target.classList.add('active')

            const top = document.querySelector(`.${e.target.dataset.name}`).offsetTop

            document.documentElement.scrollTop = top
        }
    })


    window.addEventListener('scroll', function () {
        const old = document.querySelector('.vivo-elevator-list .active')
        if (old) old.classList.remove('active')

        const CountTime = document.querySelector('.CountTime')
        const hotGoods = document.querySelector('.hotGoods')
        const phone = document.querySelector('.phone')
        const accessory = document.querySelector('.accessory')
        const n = document.documentElement.scrollTop

        if (n >= CountTime.offsetTop && n < hotGoods.offsetTop) {
          document.querySelector('[data-name=CountTime]').classList.add('active')
        } else if (n >= hotGoods.offsetTop && n < phone.offsetTop) {
          document.querySelector('[data-name=hotGoods]').classList.add('active')
        } else if (n >= phone.offsetTop && n < accessory.offsetTop) {
          document.querySelector('[data-name=phone]').classList.add('active')
        } else if (n >= accessory.offsetTop) {
          document.querySelector('[data-name=accessory]').classList.add('active')
        }
      })
})();

