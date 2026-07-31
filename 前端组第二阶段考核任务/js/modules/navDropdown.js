// // 顶部下拉导航栏效果
// (function(){
//     document.addEventListener('DOMContentLoaded',function(){
//     const listWrap = document.querySelector('.navDropdown-list');
//     const leftBtn = document.querySelector('.navLeftBtn');
//     const rightBtn = document.querySelector('.navRightBtn');
//     let scrollOffset = 0;
//     // 单张卡片宽度 + gap间隙 总和，和css卡片尺寸对应：200 + 10
//     const singleWidth = 210;

//     rightBtn.addEventListener('click', () => {
//         scrollOffset -= singleWidth;
//         listWrap.style.transform = `translateX(${scrollOffset}px)`;
//     });
//     leftBtn.addEventListener('click', () => {
//         if (scrollOffset >= 0) return;
//         scrollOffset += singleWidth;
//         listWrap.style.transform = `translateX(${scrollOffset}px)`;
//     });
// })
// })();

(function () {
    //下拉列表功能
    const headerWrap = document.getElementById('headerWrap');
    const navDropdown = document.querySelector('.navDropdown');
    const menuItems = document.querySelectorAll('li[data-menu]');
    const panels = document.querySelectorAll('.navDropdown-panel');

    let closeTimer = null;

    function clearTimer() {
        if (closeTimer) {
            clearTimeout(closeTimer);
            closeTimer = null;
        }
    }
    // 切换面板
    function switchPanel(menuKey) {
        panels.forEach(p => {
            p.classList.remove('active');
            if (p.dataset.panel === menuKey) {
                p.classList.add('active');
            }
        })
        // 打开外层卷帘（只有第一次生效，后续横向切换只是保留show类）
        navDropdown.classList.add('show');
    }

    function closeAll() {
        navDropdown.classList.remove('show');
    }

    menuItems.forEach(li => {
        const key = li.dataset.menu;
        li.addEventListener('mouseenter', () => {
            clearTimer();
            switchPanel(key);
        })
    })

    headerWrap.addEventListener('mouseleave', () => {
        clearTimer();
        closeTimer = setTimeout(() => {
            closeAll();
        }, 150);
    })
    headerWrap.addEventListener('mouseenter', () => {
        clearTimer();
    })


    // 对小组件的作用域隔离，每个下拉菜单的scrollOffset、dom都封闭在函数内部
    function initDropdownScroller(dropdown) {
        //1.在当前dropdown内查找list leftbtn rightbtn
        //2.防御性检查（上述dom缺失时退出if (!list || !leftBtn || !rightBtn) return）
        //3.声明该实例独立的scrollOffset
        //4.绑定事件
        const list = document.querySelector('.navDropdown-list')
        const leftBtn = document.querySelector('.navLeftBtn')
        const rightBtn = document.querySelector('.navRightBtn')
        const singleWidth = 210;

        if (!list || !leftBtn || !rightBtn) return

        let scrollOffset = 0

        leftBtn.addEventListener('click', function () {
            scrollOffset += singleWidth
            if (scrollOffset > 0) scrollOffset = 0
            list.style.transform = `translateX(${scrollOffset}px)`
        })

        rightBtn.addEventListener('click', function () {
            scrollOffset -= singleWidth
            list.style.transform = `translateX(${scrollOffset}px)`
        })
    }

    const dropdowns = document.querySelectorAll('.navDropdown')
    dropdowns.forEach(dropdown => initDropdownScroller(dropdown))


})();