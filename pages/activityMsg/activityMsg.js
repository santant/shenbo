// pages/activityMsg/activityMsg.js
const app = getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    HOST: getApp().globalData.Host,
    activityListMsg: [] //活动详情
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var article = '<div>我是HTML代码</div>';

    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    var vm = this;
   

    wx.request({
      url: this.data.HOST + 'webAppActive/activeDetail?id=' + options.code+'&lang=0&clientType=2&platform=2',
      success: function (res) {
        // activityListMsg: WxParse.wxParse('activityListMsg', 'html', res.data.entity, vm, 5)
        // this.data.collection = res.data.entitys[0]
        vm.setData({
          activityListMsg: res.data.entity
        })
        var article = res.data.entity.activeDetails;
        wx.hideLoading()
        WxParse.wxParse('article', 'html', article, vm, 5);
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (event) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})