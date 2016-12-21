//スムーススクロール
$(function(){
    $('a[href*=#], area[href*=#]').not(".noScroll").click(function() {
 
        var speed = 400, // ミリ秒(この値を変えるとスピードが変わる)
            href = $(this).prop("href"), //リンク先を絶対パスとして取得
            hrefPageUrl = href.split("#")[0], //リンク先を絶対パスについて、#より前のURLを取得
            currentUrl = location.href, //現在のページの絶対パスを取得
            currentUrl = currentUrl.split("#")[0]; //現在のページの絶対パスについて、#より前のURLを取得
 
        //#より前の絶対パスが、リンク先と現在のページで同じだったらスムーススクロールを実行
        if(hrefPageUrl == currentUrl){
 
            //リンク先の#からあとの値を取得
            href = href.split("#");
            href = href.pop();
            href = "#" + href;
 
            //スムースクロールの実装
            var target = $(href == "#" || href == "" ? 'html' : href),
                position = target.offset().top, //targetの位置を取得
                body = 'body',
                userAgent = window.navigator.userAgent.toLowerCase();
            if (userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1 || userAgent.indexOf("firefox") > -1 ) { /*IE8.9.10.11*/
                body = 'html';
            }
            $(body).animate({
                scrollTop: position
            }, speed, 'swing', function() {
                //スムーススクロールを行ったあとに、アドレスを変更(アドレスを変えたくない場合はここを削除)
                if(href != "#top" && href !="#") {
                    location.href = href; 
                }
            });
 
            return false;
        }
 
    });
});