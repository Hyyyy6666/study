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
                    <a href="javascript;" data-id="${index}">
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