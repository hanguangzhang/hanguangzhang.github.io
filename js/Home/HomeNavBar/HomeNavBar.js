define(['Et','text!HomeNavBar.html',
        'jquery',
        'domReady',
        'JingXuan'
    ],
    function(Et,html,jq,domReady,JingXuan){
        function initViewWithData(){
            /**
             * 精选,优惠,海淘,发现,原创
             * 
             */
            var list = [
                { title: "精选" },
                { title: "优惠" },
                { title: "海淘" },
                { title: "发现" },
                { title: "原创" }
            ];
            var rs =  Et.template(html,{list:list});
            jq('#homeNavBar').html(rs);
            domReady(function(){
                //获取导航按钮的数组
                var navBtns = jq('.navBtn');
                navBtns.click(function(){
                    //获取被点击按钮的下标
                    var index = jq(this).index();
                    switch(index){
                        case 0: {
                            //精选的API
                            JingXuan.initViewWithData();
                        }
                        case 1: {

                        }
                        case 2: {

                        }
                        case 3: {

                        }
                        case 4: {

                        }
                        default: {

                        }
                    }
                })
            })
        }
        return {
            initViewWithData: initViewWithData
        }
})