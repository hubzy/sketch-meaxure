 /// <reference path="../../node_modules/@types/jquery/index.d.ts"/>
 import { project } from "../common";

 // declare var $: (selector) => any;
 
 //瀑布流
 export function atlasMethod() {
     if ($('.navbar').hasClass('open')) {
         var one = $('.artboard'),                       //one 单张元素 
             div = $('.section-view');                     //div  容器
         var colCount: number   //定义列数              parseInt() 函数可解析一个字符串，并返回一个整数。
         var colHeightArry = []                                          //定义列高度数组
         var imgWidth: number = $(one).outerWidth(true)                          //获取单张宽度
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
     };
 }
 
 // //瀑布流定时器
 // let setInT = setInterval(stream, 600)
 
 
 // //当窗口加载完毕，停止定时器
 // $(window).on('load', function () {
 //     setTimeout(function () {
 //         clearInterval(setInT)
 //     }, 1000)
 // })
 //当窗口大小重置之后，重新执行
 $(window).on('resize', function () {
     atlasMethod()
 })
 