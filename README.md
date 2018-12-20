# LookMore
“点击查看更多”的功能
# 用法
      toggleAll参数说明   bigDiv是包裹了你想查看更多的所有标签的内容
                         smallDiv是大标签（bigDiv）包裹的所有标签里面的一个个的小标签
                          num是你想从哪里开始把接下来的一个个的小标签开始隐藏

# 示例
HTML部分：
# 
<div class="list-box">
            <ul>
              <li data-pname="账号相关">
                <div class="content  content-description" data-ptype="">1.手机注册、找回密码等相关问题<a class="action" href="#/add_workorder_add?type=11">点击提问</a></div>
                <div class="content  content-description" data-ptype="">2.账户认证等相关问题<a class="action" href="#/add_workorder_add?type=12">点击提问</a></div>
                <div class="content  content-description" data-ptype="">3.申请成为企业用户及商家等相关问题<a class="action" href="#/add_workorder_add?type=13">点击提问</a></div>
                <div class="content  content-description" data-ptype="">4.企业信息修改等相关问题<a class="action" href="#/add_workorder_add?type=14">点击提问</a></div>
              </li>
              </ul>
          </div>
        </div>
 #
js部分：
lookMore.toggleAll('.list-box ul li','div',2);
