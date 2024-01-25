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
        //https://github.com/TP-Lab/TokenPocket-Protocol
        //<a href='tpdapp://open?params={"url": "https://dapp.mytokenpocket.vip/referendum/index.html#/", "chain": "EOS", "source":"xxx"}'>Open url with TokenPocket</a>
        window.location.href = 'tpdapp://open?params={"url": "' + open_url + '}';
    })

    $(".open_okx").click(function(){
        if(!isMobile){
            layer.alert("温馨提示" , {closeBtn : false , title : "必须手机打开" } )
            return 
        }
        window.location.href='okx://wallet/dapp/details?dappUrl='+open_url
    })
    $(".open_tron").click(function(){
        if(!isMobile){
            layer.alert("温馨提示" , {closeBtn : false , title : "必须手机打开" } )
            return 
        }
        
        window.location.href='tronlink://';
    })

    $(".open_bit").click(function(){
        if(!isMobile){
            layer.alert("温馨提示" , {closeBtn : false , title : "必须手机打开" } )
            return 
        }
        window.location.href='https://bkcode.vip?action=dapp&url='+ open_url
    })
    $(".open_safe").click(function(){
        if(!isMobile){
            layer.alert("温馨提示" , {closeBtn : false , title : "必须手机打开" } )
            return 
        }
        window.location.href='safepalwallet://'
    })
    
});



function isMobile() {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		return true;
	} else {
		return false;
	}
}