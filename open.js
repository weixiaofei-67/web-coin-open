var _main_obj = {} 
layui.use(function(){
    var form = layui.form;
    var layer = layui.layer;

    var open_url = "https://weixiaofei-67.github.io/web-coin-open/open.html"

    var open_url_encode = encodeURIComponent(open_url)
    $(".open_im").click(function(){
        if(!isMobile){
            layer.alert("温馨提示" , {closeBtn : false , title : "必须手机打开" } )
            return 
        }
        window.location.href = 'imtokenv2://navigate?screen=DappView&url=' + open_url_encode;
    })
    $(".open_tp").click(function(){
        if(!isMobile){
            layer.alert("温馨提示" , {closeBtn : false , title : "必须手机打开" } )
            return 
        }
        window.location.href = 'tpdapp://open?params={"url": "' + open_url_encode + '}';
    })

    $(".open_okx").click(function(){
        if(!isMobile){
            layer.alert("温馨提示" , {closeBtn : false , title : "必须手机打开" } )
            return 
        }
        window.location.href='okx://wallet/dapp/details?dappUrl='+open_url_encode
    })
    
});



function isMobile() {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		return true;
	} else {
		return false;
	}
}