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
    name: "hello world",
    img: "/images/pic1.jpeg"
  },
  getMyInfo:function(e){
    console.log(e.detail.userInfo)
    let info = e.detail.userInfo;
    this.setData({
      name: info.nickName,
      img: info.avatarUrl
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
