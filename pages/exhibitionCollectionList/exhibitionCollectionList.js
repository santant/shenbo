// pages/exhibitionCollectionList/exhibitionCollectionList.js
Page({
  //事件处理函数
  tapGoListMsg: function (event) {
    wx.navigateTo({
      url: '../collectionMsg/collectionMsg?id=' + event.currentTarget.id
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    HOST: getApp().globalData.Host,
    dataList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    var _this = this
    var resId = options.id
    wx.request({
      url: _this.data.HOST + '/webAppExhibition/getExhibitionDetail?lang=0&platform=2',
      data: {
        clientType: 3,
        resId: resId
      },
      success: function (res) {
        if (res.data.masg == '成功') {
          wx.hideLoading()         
          _this.setData({
            dataList: res.data.entity,           
          })
         
        }  
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