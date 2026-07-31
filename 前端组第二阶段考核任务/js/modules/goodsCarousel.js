//v秒杀部分轮播图
(function(){
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
})();