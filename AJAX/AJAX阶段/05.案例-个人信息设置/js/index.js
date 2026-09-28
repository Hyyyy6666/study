/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */

// 1.1获取用户的数据
const creator = 'b612'

axios({
    url: 'http://hmajax.itheima.net/api/settings',
    params: {
        creator
    }
}).then(result => {
    const userObj = result.data.data
    console.log(result)

    // 1.2回显数据到标签上：遍历每一个属性，用key快速赋值
    Object.keys(userObj).forEach(key => {
        if (key === 'avatar') {
            // 赋予默认头像
            document.querySelector('.prew').src = userObj[key]
        } else if (key === 'gender') {
            // 赋予默认性别
            // 获取性别单选框：[男radio元素，女radio元素]
            const gRadioList = document.querySelectorAll('.gender')
            console.log(gRadioList)
            // 获取性别数字：0男1女
            const gNum = userObj[key]
            // 通过性别数字，作为下表，找到对应性别单选框，设置选中状态
            gRadioList[gNum].checked = true
        } else {
            // 赋予默认内容
            document.querySelector(`.${key}`).value = userObj[key]
        }
    }
    )

})

/**
 * 目标2：头像修改
 *  2.1 选择头像文件
 *  2.2 提交服务器并更新头像
 * */

// 用label的for属性将更换图片的文字与input关联，for的值要与id一致
// 用input来绑定事件

// 文件选择元素 -> change事件
document.querySelector('.upload').addEventListener('change', e => {
    // 2.1 选择头像文件
    console.log(e.target.files[0])
    const fd = new FormData()
    fd.append('avatar', e.target.files[0])
    fd.append('creator', creator)

    // 2.2 提交服务器并更新头像
    axios({
        url: 'http://hmajax.ithem.net/api/avatar',
        method: 'PUT',
        data: fd
    }).then(result => {
        const imgUrl = result.data.data.avatar

        // 把新的头像回显到页面上
        document.querySelector('.prew').src = imgUrl
    })
})


/**
 * 目标3：信息修改
 *  3.1 收集表单
 *  3.2 提交保存
 * */

/**
 * 目标4：提示框结果显示
 *  4.1 创建toast对象
 * <div class="toast my-toast" data-bs-delay="1500">
    <div class="toast-body">
      <div class="alert alert-success info-box">
        操作成功
      </div>
    </div>
  </div>
 *  4.2 调用show方法 -> 显示提示框
 * */

// 保存修改 -> 点击

document.querySelector('.submit').addEventListener('click', ()=>{
    // 3.1收集表单信息
    const userForm = document.querySelector('.user-form')

    const userObj = serialize(userForm, {hash : true , empty: true })

    console.log(userObj)

    userObj.creator = creator
    // 性别数字字符串，转成数字类型
    userObj.gender = +userObj.gender

    // 3.2提交到服务器保存
    axios({
        url:'http://hmajax.net/api/settings',
        method:'POST',
        // 自动将对象给转换成JSON
        data: userObj
    }).then(result => {
        // 4.1创建toast对象
        const toastDom = document.querySelector('.my-toast')
        const toast = new bootstrap.Toast(toastDom)
        
        // 4.2调用show方法
        toast.show()
    })
})




