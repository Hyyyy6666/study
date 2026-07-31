//v秒杀部分倒计时
(function () {

    //写死的时间戳 ==> 自动滚动修改时间的时间戳
    function getnextDeadline(){
        const now = new Date()
        //构造今天的截止时间
        //判断是否已过，如果过了就+1天
        //返回时间戳
        const deadline = new Date(now)//创造当前时间副本而不是重新获取一个目标时间

        deadline.setHours(23, 30, 0, 0)//setHours(hours, minutes, seconds, milliseconds)

        if(now >= deadline){
            deadline.setDate(deadline.getDate() + 1)
        }

        return +deadline//隐式转换，用+将Date对象转换为时间戳
    }

    function getNewTime() {
        const now = +new Date()

        const next = getnextDeadline()//将写死的具体数值改换成上述的函数

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

    // setInterval(getNewTime, 1000)
    //倒计时“抖动与跳秒”问题
    function startCountdown() {
    let lastUpdate = 0

        //增加visibilitychange监听事件，切换页面后也能统一时间
        document.addEventListener('visibilitychange', () =>{
            if(!document.hidden){
                //页面刷新的时候，立即重新刷新更改锚点
                getNewTime()
                lastUpdate = performance.now()// performance.now() 与 rAF 的 timestamp 对齐，保持时间基准统一
            }
        })

    function tick(timestamp) {
        // 每 1000ms 才真正更新一次 DOM，但检查频率跟随屏幕刷新率
        if (timestamp - lastUpdate >= 1000) {
            getNewTime()       // 原有更新逻辑
            lastUpdate = timestamp // 重置锚点
        }
        requestAnimationFrame(tick)//原本每秒60次检查，由于上述if语句检查间隔时间，所以降为每秒一次检查，节流
    }

    requestAnimationFrame(tick)
}

// 启动
startCountdown();
})();

