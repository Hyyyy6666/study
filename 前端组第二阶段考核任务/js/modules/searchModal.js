// 弹窗搜索框
(function(){
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
})();