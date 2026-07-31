//entry部分的侧边列表
(function(){
   const categoryitems = document.querySelectorAll('.categoryitem')

categoryitems.forEach(item => {
    let openTimer = null

    const dropdown = item.querySelector('.dropdown')
    if(!dropdown) return // 防止没有dropdown的元素报错

    // dropdown.classList.add('show')
    //增加防误触机制，setTimeout（  ， ）
    item.addEventListener('mouseenter',function(){
        //设置延时定时器setTimeout优化dom操作，提高性能
        openTimer = setTimeout(() => {
            dropdown.classList.add('show')
        }, 80);
    });

    item.addEventListener('mouseleave',function(){
        //清除有可能还没有执行的操作
        //与setTimeout一样都的使用方法，鼠标离开时取消setTimeout的操作
        clearTimeout(openTimer)

        dropdown.classList.remove('show')
    });
}); 
})();