// pages/exhibition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    HOST: getApp().globalData.Host,
    dataList:[]
  },
  toast:function(){
    wx.navigateTo({
      url: '../exhibitionMsg/exhibitionMsg'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.request({
      url: 'https://shenbo.artup.com//webService/getEntitysByLM?pageNo=1&pageSize=10&lang=0&LM=L0202', //仅为示例，并非真实的接口地址
      data: {
        clientType:3
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if(res.data.masg == '成功'){
          _this.setData({
            dataList: res.data.entitys
          })
        }
        console.log(res.data)
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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