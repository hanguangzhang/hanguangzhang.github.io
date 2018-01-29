//引入接口
require.config({
    baseUrl: './js',
    paths: {
        Home: 'Home/Home',
        DataModule: 'Net/DataModule',
        Et: 'libs/easy.templatejs.min',
        text: 'libs/text',
        jquery: 'libs/jquery',
        domReady: 'libs/domReady'   
    }
})
require(['Home'],function(home){
    
})