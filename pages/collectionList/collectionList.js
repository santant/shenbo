// pages/collectionLis t/collectionList.js
Page({
  //事件处理函数
  tapGoList: function (event) {
    wx.navigateTo({
      url: '../collectionMsg/collectionMsg'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    HOST: getApp().globalData.Host,
    collection: [] //藏品list

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var vm = this;
    console.log(vm.options.code)
    //对应的二级资源
    wx.request({
      url: this.data.HOST + 'webService/getEntitysByFenlei?Fenlei=C010103&pageNo=1&pageSize=100&lang=0&clientType=3&platform=3',
      success: function (res) {
        console.log(res.data)
        // vm.setData({
        //   collection: res.data.entitys[0]
        // })
      }
    })
    //头部接口
    wx.request({
      url: this.data.HOST + 'CmsActiveService/getFenleiBycode?code=C0101&clientType=3&platform=3',
      success: function (res) {
        console.log(res.data.entitys[0])
        // this.data.collection = res.data.entitys[0]
        vm.setData({
          collection: res.data.entitys[0]
        })
      }
    })
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