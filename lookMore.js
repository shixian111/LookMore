var lookMore={
    /**************展开全部和收起***
     * toggleAll参数说明   bigDiv是包裹了你想查看更多的所有标签的内容
     *                     smallDiv是大标签（bigDiv）包裹的所有标签里面的一个个的小标签
     *                     num是你想从哪里开始把接下来的一个个的小标签开始隐藏
     * *********/
   toggleAll: function(bigDiv,smallDiv,num){
    $(bigDiv).find(smallDiv+":gt("+num+")").hide();
    $(bigDiv).each(function(index){
        if( $(bigDiv).eq(index).find(smallDiv).length>=num){
            $(bigDiv).eq(index).find(smallDiv+":last").after("<span class='show'><a style='color:#2093FF'>点击展开全部&gt;&gt;</a></span>");
            // showAndHide(smallDiv,num);
            $(bigDiv+" .show").eq(index).click(function(){
                $(this).parent().find(smallDiv+":gt("+num+")").slideToggle();
                var temp=$(this).find("a");
              //  console.log("woll"+temp.html());
                temp.html() == "点击展开全部&gt;&gt;" ? temp.html("收起&lt;&lt;") : temp.html("点击展开全部&gt;&gt;");
            });
        }
    });
}
}
