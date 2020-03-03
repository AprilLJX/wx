1.单位：rpx 适配所有屏幕
Iphon6 1rpx = 0.5px
2.常用属性：background-color border width height

3.内联样式：class style
<view style='color:res;background:yellow'>...</view>

#### flwx布局

1.容器和项目
容器包含项目
2.坐标轴
主轴 从左到右 交叉轴 从上到下 水平布局 默认
主轴 从上到下 垂直布局

容器属性：
1.flex-direction
display:flex;
fix-direction:row/column/column-reverse
2.justify-content:flex-start/center/flex-end/space-around/space-between(主轴两侧无间隙，项目之间有间隙)
3.align-items:
strech:未设置项目尺寸时将项目拉伸至填满交叉轴
fkex-start：项目顶部与交叉轴起点对齐
center：项目在交叉轴居中对齐
flex-end：项目底部与交叉轴终点对齐
4.align-content同上
5.flex-wrap
nowrap：不换行，压缩项目
wrap：超过自动换行
wrap-reverse：