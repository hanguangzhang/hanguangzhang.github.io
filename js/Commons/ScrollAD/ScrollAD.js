define(['Et','text!Commons/ScrollAD/ScrollAD.html','jquery'],function(Et,html,jq){
    Et.enableScript = true;
    Et.enableStyle = true;
    function initViewWithData(data){
        console.log(data);
        var rs = Et.template(html,{list: data});
        jq('#scrollAD').html(rs);
    }
    return {
        initViewWithData: initViewWithData
    }
})