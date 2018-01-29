/**
 * 
 * 商品列表
 * 
 */

 define(['Et','text!GoodsList.html','jquery'],function(Et,html,jq){
     var initView = function(data){
        console.log("获取商品列表数据");
        console.log(data);
       var rs = Et.template(html,{list:data});
       jq('#listContainer').html(rs);
     }
     return {
         initView: initView
     }
 })