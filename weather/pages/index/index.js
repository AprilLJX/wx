// pages/index/index.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    region:["湖南省","长沙市","望城区"],
    now:''
  },
  changeRegion:function(e){
    console.log(e.detail.value);
    this.setData({
      region:e.detail.value
    })
    this.getWeather();//改变区域选择器后调用函数，这里用this
  },

  getWeather:function(){
    // let局部 var全局
    var that=this;//this不可以直接在wcAPI函数内部使用
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.region[1],
        key:''
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          now: res.data.HeWeather6[0].now
        })
      }
    })
    
  },

// 生命周期函数--监听页面加载
  onLoad:function(option){
    this.getWeather()
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
