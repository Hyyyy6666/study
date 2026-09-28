/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */

const creator = 'AAA建材市场老王'

function getBookList() {
    axios({
        url: 'https://hmajax.itheima.net/api/books',
        params: {
            creator
        }
    }).then(result => {
        // console.log(result)
        const bookList = result.data.data
        console.log(bookList)
        const htmlStr = bookList.map((item, index) => {
            return `<tr>
                        <td>${index + 1}</td>
                        <td>${item.bookname}</td>
                        <td>${item.author}</td>
                        <td>${item.publisher}</td>
                        <td data-id=${item.id}>
                            <span class="del">删除</span>
                            <span class="edit">编辑</span>
                        </td>
                    </tr>`
        }).join('')
        // console.log(htmlStr)
        document.querySelector('.list').innerHTML = htmlStr
    })
}

getBookList()

//2.新增图书业务
// 2.1新增弹框-> 显示和隐藏
// 2.2收藏表单数据,并提交到服务器保存
// 2.3刷新图书列表

const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)

document.querySelector('.add-btn').addEventListener('click', () => {
    // 2.2收藏表单数据,并提交到服务器保存
    const addForm = document.querySelector('.add-form')
    const bookObj = serialize(addForm, { hash: true, empty: true })
    axios({
        url: 'https://hmajax.itheima.net/api/books',
        method: 'POST',
        data: {
            ...bookObj,
            creator
        }
    }).then(result => {
        console.log(result)

        getBookList()

        addForm.reset()

        addModal.hide()
    })
})

//3.删除业务
document.querySelector('.list').addEventListener('click', e => {
    e.preventDefault

    if (e.target.classList.contains('del')) {
        const theId = e.target.parentNode.dataset.id

        axios({
            url: `https://hmajax.itheima.net/api/books/${theId}`,
            method: 'DELETE'
        }).then(result => {
            getBookList()
        })
    }
})


//4.编辑业务
// 4.1弹窗显示隐藏
// 4.2获取当前编辑图书数据->回到编辑页面
// 4.3提交保存修改，并刷新列表
const ediDom = document.querySelector('.edit-modal')
const ediModal = new bootstrap.Modal(ediDom)

document.querySelector('.list').addEventListener('click', e => {
    if (e.target.classList.contains('edit')) {
        const theId = e.target.parentNode.dataset.id
        axios({
            url: `https://hmajax.itheima.net/api/books/${theId}`
        }).then(result => {
            const bookObj = result.data.data

            // document.querySelector('.edit-form .bookname').value = bookObj.bookname
            // document.querySelector('.edit-form .author').value = bookObj.author
            // document.querySelector('.edit-form .publisher').value = bookObj.publisher
            //可以用遍历快速赋值
            const keys = Object.keys(bookObj)
            keys.forEach(key => {
                document.querySelector(`.edit-form .${key}`).value = bookObj[key]
            });
        })
        ediModal.show()
    }
})

document.querySelector('.edit-btn').addEventListener('click', () => {
    const editForm = document.querySelector('.edit-form')
    const { id, bookname, author, publisher } = serialize(editForm, { hash: true, empty: true })
    //隐藏表单域可以防止用户意外修改且便于服务器识别所选中的图书

    axios({
        url: `https://hmajax.itheima.net/api/books/${id}`,
        method: 'PUT',
        data: {
            bookname,
            author,
            publisher,
            creator
        }
    }).then(() => {
        getBookList()

        ediModal.hide()
    })
})
