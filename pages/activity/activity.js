//index.js
//获取应用实例
const app = getApp()

Page({
  tapGoList: function (event) {
    wx.navigateTo({
      url: '../activityMsg/activityMsg'
    })
  },
  data: {
    motto: 'Hello World',
  }
 
})
