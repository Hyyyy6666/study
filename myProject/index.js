const initData = [
    {
        serial:1,
        content:"学习JS"
    }
]

const arr = JSON.parse(localStorage.getItem('data')) || []

const tbody = document.querySelector('tbody')

function render(){
    const newArr = arr.map(function(element,index){
        return `
            <tr>
                <td>${element.serial}</td>
                <td>${element.content}</td>
                <td>
                    <a href="javascript:;" data-id="${index}">
                        删除
                    </a>
                </td> 
            </tr>
        `
    })

    tbody.innerHTML = newArr.join("")

    document.querySelector('.title span').innerHTML = newArr.length
}

render()


//创建数据业务
// 1.获取元素
const info = document.querySelector('.info')
const content = document.querySelector('.text')

info.addEventListener('submit',function(e){
    e.preventDefault()

    if(!content.value){
        alert("提交信息不能为空")
        return
    }

    arr.push({
        serial:arr.length?arr[arr.length -1].serial + 1 : 1 ,
        content:content.value
    })

    render()

    this.reset()

    localStorage.setItem('data',JSON.stringify(arr))
})