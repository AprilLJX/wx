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
    city:["北京市","北京市","大兴区"],
    now:"",
  },
  chooseCity:function(e){
    console.log(e.detail.value)
    this.setData({
      city:e.detail.value
    })
    this.getWeather()
  },

  getWeather:function(){
    var that=this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.city[1],
        key: ''
      },
      success:function(res){
        // console.log(res.data)
        that.setData({
          now: res.data.HeWeather6[0].now
        })
      }
    })
  },

  getUserLoc:function(){
    var that = this;
    wx.getLocation({
      success: function(res) {
        console.log(res)
        var latitude = res.latitude;
        var longitude = res.longitude;
        that.tranLocToCity(longitude, latitude)
      },
    })
    
  },

  tranLocToCity:function(longitude,latitude){
    var that = this;
    wx.request({
      url: 'https://api.map.baidu.com/reverse_geocoding/v3/?ak=&output=json&location='+latitude+","+longitude,
      success:function(res){
        console.log(res.data.result)
        that.setData({
          city: [res.data.result.addressComponent.province, res.data.result.addressComponent.city, res.data.result.addressComponent.district]
        })
      },
    })
  },

  onLoad:function(option){
    this.getUserLoc(),
    this.getWeather()
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
