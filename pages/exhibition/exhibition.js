// pages/exhibition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    HOST: getApp().globalData.Host,
    dataList:[],
    types:'',
    selectOne:true,
    selectTwo:false
  },
  toast:function(event){
    var resId = event.currentTarget.dataset.resId
    wx.navigateTo({
      url: '../exhibitionMsg/exhibitionMsg?resId=' + resId
    })
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
    _this.checkTypes('L0202')
  },
  checkUpdata(event){
    var that = this
    that.data.types = event.currentTarget.dataset.types
    if (that.data.types == 'L0202'){
      that.setData({
        selectOne: true,
        selectTwo:false
      })
    } else if (that.data.types == 'L0203'){
      that.setData({
        selectOne: false,
        selectTwo: true
      })
    }
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    that.checkTypes(that.data.types)
  },
  checkTypes(types){
    var _this = this
    wx.request({
      url: _this.data.HOST + '/webService/getEntitysByLM?pageNo=1&pageSize=10&lang=0&LM=' + types,
      data: {
        clientType: 3
      },
      success: function (res) {
        if (res.data.masg == '成功') {
          wx.hideLoading()
          _this.setData({
            dataList: res.data.entitys
          })
          console.log(res.data.entitys)
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