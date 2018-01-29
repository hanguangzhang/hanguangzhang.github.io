require.config({
    paths: {
        GoodsList: 'Home/JingXuan/GoodsList/GoodsList'
    }
})
define(['DataModule','GoodsList'],function(dataModule,goodsList){
    //精选API
    //http://localhost:3000/api/home?sectionId=99
    function initViewWithData(){
         var promise = dataModule.loadData('http://localhost:3000/api/home?sectionId=99')
        promise.then(function(resp){
            goodsList.initView(resp.listIndex);
        })
    }
    return {
        initViewWithData: initViewWithData
    }
})