# LookMore
“点击查看更多”的功能
# 用法
      toggleAll参数说明   bigDiv是包裹了你想查看更多的所有标签的内容
                         smallDiv是大标签（bigDiv）包裹的所有标签里面的一个个的小标签
                          num是你想从哪里开始把接下来的一个个的小标签开始隐藏

# 示例
HTML部分：
<div class="list-box">
            <div class="title">
              <i class="border"></i>公共问题
            </div>
            <ul>
              <li data-pname="账号相关">
                <span class="name">账号相关</span>
                <div class="content  content-description" data-ptype="">1.手机注册、找回密码等相关问题<a class="action" href="#/add_workorder_add?type=11">点击提问</a></div>
                <div class="content  content-description" data-ptype="">2.账户认证等相关问题<a class="action" href="#/add_workorder_add?type=12">点击提问</a></div>
                <div class="content  content-description" data-ptype="">3.申请成为企业用户及商家等相关问题<a class="action" href="#/add_workorder_add?type=13">点击提问</a></div>
                <div class="content  content-description" data-ptype="">4.企业信息修改等相关问题<a class="action" href="#/add_workorder_add?type=14">点击提问</a></div>
              </li>
              <li data-pname="财务类">
                  <span class="name">财务类</span>
                  <div class="content content-description">1.诚意保证金、分期付款等相关问题<a class="action" href="#/add_workorder_add?type=21">点击提问</a></div>
                  <div class="content content-description">2.需求订单相关问题<a class="action" href="#/add_workorder_add?type=22">点击提问</a></div> 
              </li>
              <li data-pname="竞标类">
                  <span class="name">竞标类</span>
                  <div class="content content-description">1.竞标发布需求等相关问题<a class="action" href="#/add_workorder_add?type=31">点击提问</a></div>
                  <div class="content content-description">2.查看竞标等相关问题<a class="action" href="#/add_workorder_add?type=32">点击提问</a></div> 
              </li>
              <li data-pname="合同类">
                  <span class="name">合同类</span>
                  <div class="content content-description">1.合同等相关问题<a class="action" href="#/add_workorder_add?type=41">点击提问</a></div>
              </li>
            </ul>
          </div>
          <div class="list-box">
              <div class="title">
                 <i class="border"></i>其它问题
              </div>
              <ul>
                  <li data-pname="意见反馈">
                      <span class="name">意见反馈</span>
                      <div class="content content-description">意见反馈<a class="action" href="#/add_workorder_add?type=A1">点击提问</a></div> 
                  </li>
                <li data-pname="其它问题">
                  <span class="name">其它问题</span>
                  <div class="content content-description">其它问题<a class="action" href="#/add_workorder_add?type=B1">点击提问</a></div>
                </li>
              </ul>
          </div>
        </div>
js部分：
lookMore.toggleAll('.list-box ul li','div',2);
