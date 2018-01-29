//首页
require.config({

    paths: {
        FaXian: 'Home/FaXian/FaXian',
        HaiTao: 'Home/HaiTao/HaiTao',
        JingXuan: 'Home/JingXuan/JingXuan',
        YouHui: 'Home/YouHui/YouHui',
        YuanChuang: 'Home/YuanChuang/YuanChuang',
        ScrollAD: 'Commons/ScrollAD/ScrollAD',
        HomeNavBar: 'Home/HomeNavBar/HomeNavBar'
    }
})

define(['DataModule','ScrollAD','HomeNavBar','Et','jquery','JingXuan'],
        function(dataModule,ScrollAD,HomeNavBar,Et,jq,JingXuan){
    Et.enableScript = true;
    Et.enableStyle = true;
     //加载轮播图数据
    var scrollADURL = 'http://localhost:3000/api/listFocus';
    var promise = dataModule.loadData(scrollADURL);
    promise.then(function(data){
        ScrollAD.initViewWithData(data.focus);
    })
    //初始化导航列表
    HomeNavBar.initViewWithData();
    JingXuan.initViewWithData();
   
})