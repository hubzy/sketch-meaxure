/// <reference path="../../node_modules/@types/jquery/index.d.ts"/>
import { project } from "../common";

export function allAtlasMethod() {
    //判断瀑布流状态
    let navbar = sessionStorage.getItem("navbar");
    navbar == 'open' ? navbarOpen() : '';

    //瀑布流
    function atlasMethod() {
        if ($('.navbar').hasClass('open')) {
            $('header').css('display', 'none')
            var one = $('.artboard'),                       //one 单张元素 
                div = $('.section-view');                     //div  容器
            var colCount: number;  //定义列数              parseInt() 函数可解析一个字符串，并返回一个整数。
            var colHeightArry = []                                          //定义列高度数组
            var imgWidth: number = $(one).outerWidth(true);                          //获取单张宽度
            var imgNub = project.artboards.length                                     //获取图片数量 
            var colCount = parseInt(($(div).width() / imgWidth).toString())            //div宽度 / 单张宽度 = 列数
            var zWidth = parseInt(($(div).width()).toString()) - imgWidth * colCount;    //总宽度 - （单张宽度 X 列数 = 净宽度）=剩余宽度
            if (imgNub < colCount) {                                        //当图片数量小于列数时
                zWidth = parseInt(($(div).width()).toString()) - imgWidth * imgNub;      //总宽度 - （单张宽度 X 图片数量 = 图片总宽度）=剩余宽度
            }
            for (var i = 0; i < colCount; i++) {
                colHeightArry[i] = 0
            }
            $(one).each(function () {
                if ($(this).css('display') !== 'none') {
                    var minValue = colHeightArry[0]         //定义最小的高度
                    var minIndex = 0                        //定义最小高度的下标
                    for (var i = 0; i < colCount; i++) {
                        if (colHeightArry[i] < minValue) {      //如果最小高度组数中的值小于最小值
                            minValue = colHeightArry[i]         //那么认为最小高度数组中的值是真正的最小值
                            minIndex = i                        //最小下标为当前下标
                        }
                    }
                    $(this).css({
                        left: zWidth / 2 + minIndex * imgWidth,
                        top: minValue
                    })
                    $(this).children("picture").css({
                        display: 'block',
                        opacity: '1'
                    })
                    colHeightArry[minIndex] += $(this).outerHeight(true)
                }
            })
        }
    }

    //展开瀑布流
    $('.muser').click(function () {
        $('.navbar').addClass('open')
        sessionStorage.setItem("navbar", "open");
        let muserT = setInterval(atlasMethod, 100)
        setTimeout(function () {
            clearInterval(muserT)
        }, 1000)
        locationActive()
    })


    //收起瀑布流
    $('.artboard').click(function () {
        $('.navbar').removeClass('open')
        $('.icon-artboards').addClass('current')
        sessionStorage.setItem("navbar", "cleos");
        $('picture').css({
            display: '',
            opacity: ''
        });
        $('header').css('display', '');
        locationActive()
    })


    //瀑布流定时器
    let setInT = setInterval(atlasMethod, 300)

    //当窗口加载完毕，停止定时器
    $(window).on('load', function () {
        setTimeout(function () {
            clearInterval(setInT)
        }, 1000)
    })
    //强制停止定时器
    setTimeout(function () {
        clearInterval(setInT)
    }, 10000)
    //当窗口大小重置之后，重新执行
    $(window).on('resize', function () {
        atlasMethod()
        locationActive()
    })

    locationActive()

    function navbarOpen() {
        $('.navbar').addClass('open')
    }

    //点击列表重新布局
    $('.page-list > li > label').click(()=>{
        let muserT = setInterval(atlasMethod, 100)
        setTimeout(function () {
            clearInterval(muserT)
        }, 1000)
    })
    //选中光标在可视区域
    function locationActive() {
        setTimeout(function () {
            let Atop = $('.artboard-list > .active').offset().top
            let artb = $(".section-view")
            if (0 < Atop && Atop < artb.height()) {
            } else {
                let p = Atop - artb.height() / 2;
                artb.scrollTop(p + artb.scrollTop())
            }
        }, 600)

    }
}