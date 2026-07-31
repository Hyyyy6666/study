//entry部分轮播图
(function () {
    const sliderData = [
        { url: 'assets/update/banner_1.jpg', alt: 'vivo手机新品首发' },
        { url: 'assets/update/banner_2.jpg', alt: 'vivo X系列影像旗舰' },
        { url: 'assets/update/banner_3.jpg', alt: 'vivo S系列人像拍照' },
        { url: 'assets/update/banner_4.jpg', alt: 'vivo T系列性能续航' },
        { url: 'assets/update/banner_5.jpg', alt: 'vivo IoT智能生态' }
    ]
    // const entry = document.querySelector('.entry')
    const slidesContainer = document.querySelector('.banner-slides')
    const lineContainer = document.querySelector('.banner-line')
    const slideDuration = 4000

    const indicators = []

    sliderData.forEach(function (item, index) {
        const img = document.createElement('img')
        img.src = item.url
        img.alt = item.alt || ''
        img.className = 'banner-slide'

        if (index === 0) {
            img.classList.add('active')
        }

        slidesContainer.appendChild(img)

        const li = document.createElement('li')
        if (index === 0) {
            li.className = 'active'
        }
        lineContainer.appendChild(li)

        indicators.push(li)
    })


    function resetProgress(item) {
        item.classList.remove('active')

        item.classList.add('active')
    }

    let i = 0

    // entry.style.backgroundImage = 'url(assets/update/banner_1.jpg)'

    let n = setInterval(function () {

        i++

        if (i >= sliderData.length) {
            i = 0
        }

        // entry.style.backgroundImage = "url(" + sliderData[i].url + ")"
        const currentImg = slidesContainer.querySelector('.active')
        const nextImg = slidesContainer.children[i]

        if (currentImg) {
            currentImg.classList.remove('active')
            nextImg.classList.add('active')
        }

        // document.querySelector('.banner-line .active').classList.remove('active')
        // document.querySelector(`.banner-line li:nth-child(${i + 1})`).classList.add('active')

        indicators.forEach(li => li.classList.remove('active'))
        resetProgress(indicators[i])

    }, 4000);


    indicators.forEach(function (li, index) {
        li.addEventListener('click', function () {
            if (index === i) return

            clearInterval(n)

            const currentImg = slidesContainer.querySelector('.active')
            const nextImg = slidesContainer.children[index]
            if (currentImg) {
                currentImg.classList.remove('active')
                nextImg.classList.add('active')
            }

            indicators.forEach(li => li.classList.remove('active'))
            resetProgress(indicators[index])

            i = index

            n = setInterval(function () {
        i++
        if (i >= sliderData.length) {
            i = 0
        }

        // entry.style.backgroundImage = "url(" + sliderData[i].url + ")"
        const currentImg = slidesContainer.querySelector('.active')
        const nextImg = slidesContainer.children[index]

        if (currentImg) {
            currentImg.classList.remove('active')
            nextImg.classList.add('active')
        }

        // document.querySelector('.banner-line .active').classList.remove('active')
        // document.querySelector(`.banner-line li:nth-child(${i + 1})`).classList.add('active')

        indicators.forEach(li => li.classList.remove('active'))
        resetProgress(indicators[index])

    }, 4000);
        })
    })

})();