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
