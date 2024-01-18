/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
  
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
  
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
  }
  
  showMenu('nav-toggle','nav-menu')


//--------------------------- 左->右ループ--------------------------//
$(function(){
    $(window).load(function(){
     $('.yoko__infiniteslide').infiniteslide({
       clone: 10
     });
    });
   });
   
   /*以下、jsファイル内の記述のためコピー不要******************************/
   
   
   //【infiniteslidev2.js】
   
   /*
   infiniteslide.js v2
   version: 2.0.1
   Author: T.Morimoto
   
   Copyright 2017, T.Morimoto
   * Free to use and abuse under the MIT license.
   * http://www.opensource.org/licenses/mit-license.php
   
   https://github.com/woodroots/infiniteslidev2
   */
   


  // jQueryのネームスペースでクロージャを作成
(function($){

    // ウィンドウが完全に読み込まれたら loaded を true に設定
    $(window).on('load', function() {
        window.loaded = true;
    });

    // DOMが準備完了したら実行
    $(function(){

        // Infiniteslideプラグインを定義
        $.fn.infiniteslide = function(options){
            // オプションのデフォルト値を設定
            var settings = $.extend({
                'speed': 100, // 速さ（単位はpx/秒）
                'direction': 'right', // up/down/left/rightから選択
                'pauseonhover': false, // マウスオーバーでストップしない
                'responsive': false, // 子要素の幅を%で指定しているとき
                'clone': 1
            }, options);
            
            // CSSを設定する関数
            var setCss = function(obj, direction){
                // 要素をラップしてoverflowを隠す
                $(obj).wrap('<div class="infiniteslide_wrap"></div>').parent().css({
                    overflow: 'hidden'
                });

                // 方向に応じて表示方向を設定
                var d = (direction === 'up' || direction === 'down') ? 'column' : 'row';
                $(obj).css({
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    '-ms-flex-align': 'center',
                    flexDirection: d
                }).children().css({
                    flex: 'none',
                    display: 'block'
                });
            }

            // 複製する関数
            var setClone = function(obj, clone){
                var $clone = $(obj).children().clone(true).addClass('infiniteslide_clone');
                var i = 1;
                while(i <= clone){
                    $clone.clone(true).appendTo($(obj));
                    i++;
                }
            }

            // 幅を取得する関数
            var getWidth = function(obj){
                var w = 0;
                $(obj).children(':not(.infiniteslide_clone)').each(function(key,value){
                    w = w + $(this).outerWidth(true);
                });
                return w;
            }

            // 高さを取得する関数
            var getHeight = function(obj){
                var h = 0;
                $(obj).children(':not(.infiniteslide_clone)').each(function(key,value){
                    h = h + $(this).outerHeight(true);
                });
                return h;
            }

            // スピードを取得する関数
            var getSpeed = function(l,s){
                return l / s;
            }

            // 数値を取得する関数
            var getNum = function(obj,direction){
                var num = (direction === 'up' || direction === 'down') ? getHeight(obj) : getWidth(obj);
                return num;
            }

            // 移動量を取得する関数
            var getTranslate = function(num,direction){
                var i = (direction === 'up' || direction === 'down') ? '0,-' + num + 'px,0' : '-' + num + 'px,0,0';
                return i;
            }

            // アニメーションを設定する関数
            var setAnim = function(obj,id,direction,speed){
                var num = getNum(obj,direction);
                if(direction === 'up' || direction === 'down'){
                    $(obj).parent('.infiniteslide_wrap').css({
                        height: num + 'px'
                    });
                }
                var i = getTranslate(num,direction);
                
                $(obj).attr('data-style','infiniteslide' + id);

                var css = '@keyframes infiniteslide' + id + '{' + 
                                'from {transform:translate3d(0,0,0);}' + 
                                'to {transform:translate3d(' + i + ');}' + 
                            '}';
                $('<style />').attr('id','infiniteslide' + id + '_style')
                .html(css)
                .appendTo('head');
                
                var reverse = (direction === 'right' || direction === 'down') ? ' reverse' : '';
                
                $(obj).css({
                    animation: 'infiniteslide' + id + ' ' + getSpeed(num,speed) + 's linear 0s infinite' + reverse
                });
            }

            // ストップを設定する関数
            var setStop = function(obj){
                $(obj).on('mouseenter',function(){
                    $(this).css({
                        animationPlayState: 'paused'
                    });
                }).on('mouseleave',function(){
                    $(this).css({
                        animationPlayState: 'running'
                    });
                });
            }

            // レスポンシブを設定する関数
            var setResponsive = function(obj,direction){
                var num = getNum(obj,direction);
                var i = getTranslate(num,direction);
                return i;
            };

            // 各要素ごとに処理を実行
            return this.each(function(key,value){
                var $this = $(this);
                var num = Date.now() + Math.floor(10000*Math.random()).toString(16);
                if(settings.pauseonhover === true){
                    setStop($this);
                }
                var _onload = function(){
                    setCss($this,settings.direction);
                    setClone($this,settings.clone);
                    setAnim($this,num,settings.direction,settings.speed);
                    
                    if(settings.responsive){
                        $(window).on('resize',function(){
                            var i = setResponsive($this,settings.direction);
                            var styleid = $this.attr('data-style');
                            var stylehtml = $('#' + styleid + '_style').html();
                            
                            var stylehtml_new = stylehtml.replace(/to {transform:translate3d\((.*?)\)/,'to {transform:translate3d(' + i + ')');
                            $('#' + styleid + '_style').html(stylehtml_new);

                        });
                    }
                };

                // ウィンドウが読み込まれた後に実行
                if (window.loaded) {
                    _onload();
                } else {
                    $(window).on('load', _onload);
                }
            });
            
        }
    });
})(jQuery);

  
  

  
  /////////////////////////////left////////////////////


  $(function(){
    $(window).load(function(){
     $('.left__infiniteslide').infiniteslide({
       clone: 10
     });
    });
   });
   


    

  // jQueryのネームスペースでクロージャを作成
(function($){

    // ウィンドウが完全に読み込まれたら loaded を true に設定
    $(window).on('load', function() {
        window.loaded = true;
    });

    // DOMが準備完了したら実行
    $(function(){

        // Infiniteslideプラグインを定義
        $.fn.infiniteslide = function(options){
            // オプションのデフォルト値を設定
            var settings = $.extend({
                'speed': 1, // 速さ（単位はpx/秒）
                'direction': 'down', // up/down/left/rightから選択
                'pauseonhover': false, // マウスオーバーでストップしない
                'responsive': true, // 子要素の幅を%で指定しているとき
                'clone': 1
            }, options);
            
            // CSSを設定する関数
            var setCss = function(obj, direction){
                // 要素をラップしてoverflowを隠す
                $(obj).wrap('<div class="infiniteslide_wrap"></div>').parent().css({
                    overflow: 'hidden'
                });

                // 方向に応じて表示方向を設定
                var d = (direction === 'up' || direction === 'down') ? 'column' : 'row';
                $(obj).css({
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    '-ms-flex-align': 'center',
                    flexDirection: d
                }).children().css({
                    flex: 'none',
                    display: 'block'
                });
            }

            // 複製する関数
            var setClone = function(obj, clone){
                var $clone = $(obj).children().clone(true).addClass('infiniteslide_clone');
                var i = 1;
                while(i <= clone){
                    $clone.clone(true).appendTo($(obj));
                    i++;
                }
            }

            // 幅を取得する関数
            var getWidth = function(obj){
                var w = 0;
                $(obj).children(':not(.infiniteslide_clone)').each(function(key,value){
                    w = w + $(this).outerWidth(true);
                });
                return w;
            }

            // 高さを取得する関数
            var getHeight = function(obj){
                var h = 0;
                $(obj).children(':not(.infiniteslide_clone)').each(function(key,value){
                    h = h + $(this).outerHeight(true);
                });
                return h;
            }

            // スピードを取得する関数
            var getSpeed = function(l,s){
                return l / s;
            }

            // 数値を取得する関数
            var getNum = function(obj,direction){
                var num = (direction === 'up' || direction === 'down') ? getHeight(obj) : getWidth(obj);
                return num;
            }

            // 移動量を取得する関数
            var getTranslate = function(num,direction){
                var i = (direction === 'up' || direction === 'down') ? '0,-' + num + 'px,0' : '-' + num + 'px,0,0';
                return i;
            }

            // アニメーションを設定する関数
            var setAnim = function(obj,id,direction,speed){
                var num = getNum(obj,direction);
                if(direction === 'up' || direction === 'down'){
                    $(obj).parent('.infiniteslide_wrap').css({
                        height: num + 'px'
                    });
                }
                var i = getTranslate(num,direction);
                
                $(obj).attr('data-style','infiniteslide' + id);

                var css = '@keyframes infiniteslide' + id + '{' + 
                                'from {transform:translate3d(0,0,0);}' + 
                                'to {transform:translate3d(' + i + ');}' + 
                            '}';
                $('<style />').attr('id','infiniteslide' + id + '_style')
                .html(css)
                .appendTo('head');
                
                var reverse = (direction === 'right' || direction === 'down') ? ' reverse' : '';
                
                $(obj).css({
                    animation: 'infiniteslide' + id + ' ' + getSpeed(num,speed) + 's linear 0s infinite' + reverse
                });
            }

            // ストップを設定する関数
            var setStop = function(obj){
                $(obj).on('mouseenter',function(){
                    $(this).css({
                        animationPlayState: 'paused'
                    });
                }).on('mouseleave',function(){
                    $(this).css({
                        animationPlayState: 'running'
                    });
                });
            }

            // レスポンシブを設定する関数
            var setResponsive = function(obj,direction){
                var num = getNum(obj,direction);
                var i = getTranslate(num,direction);
                return i;
            };

            // 各要素ごとに処理を実行
            return this.each(function(key,value){
                var $this = $(this);
                var num = Date.now() + Math.floor(10000*Math.random()).toString(16);
                if(settings.pauseonhover === true){
                    setStop($this);
                }
                var _onload = function(){
                    setCss($this,settings.direction);
                    setClone($this,settings.clone);
                    setAnim($this,num,settings.direction,settings.speed);
                    
                    if(settings.responsive){
                        $(window).on('resize',function(){
                            var i = setResponsive($this,settings.direction);
                            var styleid = $this.attr('data-style');
                            var stylehtml = $('#' + styleid + '_style').html();
                            
                            var stylehtml_new = stylehtml.replace(/to {transform:translate3d\((.*?)\)/,'to {transform:translate3d(' + i + ')');
                            $('#' + styleid + '_style').html(stylehtml_new);

                        });
                    }
                };

                // ウィンドウが読み込まれた後に実行
                if (window.loaded) {
                    _onload();
                } else {
                    $(window).on('load', _onload);
                }
            });
            
        }
    });
})(jQuery);


  
  /////////////////////////////right////////////////////


  $(function(){
    $(window).load(function(){
     $('.right__infiniteslide').infiniteslide({
       clone: 10
     });
    });
   });
   


    

  // jQueryのネームスペースでクロージャを作成
(function($){

    // ウィンドウが完全に読み込まれたら loaded を true に設定
    $(window).on('load', function() {
        window.loaded = true;
    });

    // DOMが準備完了したら実行
    $(function(){

        // Infiniteslideプラグインを定義
        $.fn.infiniteslide = function(options){
            // オプションのデフォルト値を設定
            var settings = $.extend({
                'speed': 30, // 速さ（単位はpx/秒）
                'direction': 'down', // up/down/left/rightから選択
                'pauseonhover': false, // マウスオーバーでストップしない
                'responsive': false, // 子要素の幅を%で指定しているとき
                'clone': 1
            }, options);
            
            // CSSを設定する関数
            var setCss = function(obj, direction){
                // 要素をラップしてoverflowを隠す
                $(obj).wrap('<div class="infiniteslide_wrap"></div>').parent().css({
                    overflow: 'hidden'
                });

                // 方向に応じて表示方向を設定
                var d = (direction === 'up' || direction === 'down') ? 'column' : 'row';
                $(obj).css({
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'center',
                    '-ms-flex-align': 'center',
                    flexDirection: d
                }).children().css({
                    flex: 'none',
                    display: 'block'
                });
            }

            // 複製する関数
            var setClone = function(obj, clone){
                var $clone = $(obj).children().clone(true).addClass('infiniteslide_clone');
                var i = 1;
                while(i <= clone){
                    $clone.clone(true).appendTo($(obj));
                    i++;
                }
            }

            // 幅を取得する関数
            var getWidth = function(obj){
                var w = 0;
                $(obj).children(':not(.infiniteslide_clone)').each(function(key,value){
                    w = w + $(this).outerWidth(true);
                });
                return w;
            }

            // 高さを取得する関数
            var getHeight = function(obj){
                var h = 0;
                $(obj).children(':not(.infiniteslide_clone)').each(function(key,value){
                    h = h + $(this).outerHeight(true);
                });
                return h;
            }

            // スピードを取得する関数
            var getSpeed = function(l,s){
                return l / s;
            }

            // 数値を取得する関数
            var getNum = function(obj,direction){
                var num = (direction === 'up' || direction === 'down') ? getHeight(obj) : getWidth(obj);
                return num;
            }

            // 移動量を取得する関数
            var getTranslate = function(num,direction){
                var i = (direction === 'up' || direction === 'down') ? '0,-' + num + 'px,0' : '-' + num + 'px,0,0';
                return i;
            }

            // アニメーションを設定する関数
            var setAnim = function(obj,id,direction,speed){
                var num = getNum(obj,direction);
                if(direction === 'up' || direction === 'down'){
                    $(obj).parent('.infiniteslide_wrap').css({
                        height: num + 'px'
                    });
                }
                var i = getTranslate(num,direction);
                
                $(obj).attr('data-style','infiniteslide' + id);

                var css = '@keyframes infiniteslide' + id + '{' + 
                                'from {transform:translate3d(0,0,0);}' + 
                                'to {transform:translate3d(' + i + ');}' + 
                            '}';
                $('<style />').attr('id','infiniteslide' + id + '_style')
                .html(css)
                .appendTo('head');
                
                var reverse = (direction === 'right' || direction === 'down') ? ' reverse' : '';
                
                $(obj).css({
                    animation: 'infiniteslide' + id + ' ' + getSpeed(num,speed) + 's linear 0s infinite' + reverse
                });
            }

            // ストップを設定する関数
            var setStop = function(obj){
                $(obj).on('mouseenter',function(){
                    $(this).css({
                        animationPlayState: 'paused'
                    });
                }).on('mouseleave',function(){
                    $(this).css({
                        animationPlayState: 'running'
                    });
                });
            }

            // レスポンシブを設定する関数
            var setResponsive = function(obj,direction){
                var num = getNum(obj,direction);
                var i = getTranslate(num,direction);
                return i;
            };

            // 各要素ごとに処理を実行
            return this.each(function(key,value){
                var $this = $(this);
                var num = Date.now() + Math.floor(10000*Math.random()).toString(16);
                if(settings.pauseonhover === true){
                    setStop($this);
                }
                var _onload = function(){
                    setCss($this,settings.direction);
                    setClone($this,settings.clone);
                    setAnim($this,num,settings.direction,settings.speed);
                    
                    if(settings.responsive){
                        $(window).on('resize',function(){
                            var i = setResponsive($this,settings.direction);
                            var styleid = $this.attr('data-style');
                            var stylehtml = $('#' + styleid + '_style').html();
                            
                            var stylehtml_new = stylehtml.replace(/to {transform:translate3d\((.*?)\)/,'to {transform:translate3d(' + i + ')');
                            $('#' + styleid + '_style').html(stylehtml_new);

                        });
                    }
                };

                // ウィンドウが読み込まれた後に実行
                if (window.loaded) {
                    _onload();
                } else {
                    $(window).on('load', _onload);
                }
            });
            
        }
    });
})(jQuery);

  
  
  
  
  
  