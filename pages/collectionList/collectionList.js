// pages/collectionLis t/collectionList.js
Page({
  //事件处理函数
  tapGoList: function (event) {
    wx.navigateTo({
      url: '../collectionMsg/collectionMsg?id=' + event.currentTarget.id
    })
  },
  checkSoure: function (event){
    //点击顶部标签切换资源
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    this.check(event.currentTarget.dataset.pcode);
    this.setData({
      activePage: event.currentTarget.dataset.index
    })
  },
  check: function(code){
    var vm = this;
    wx.request({
      url: this.data.HOST + 'webService/getEntitysByFenlei?Fenlei=' + code + '&pageNo=1&pageSize=100&lang=0&clientType=3&platform=3',
      success: function (res) {
        console.log(res)
        vm.setData({
          entitys: res.data.entitys
        })
        //隐藏loading
        wx.hideLoading()
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    HOST: getApp().globalData.Host,
    collection: [], //藏品list
    entitys: [], //下面的图文列表
    allCode:'', //查询全部的code
    activePage: 100  //选中的默认值
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // vm.check();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var vm = this;
    //动态设置title
    wx.setNavigationBarTitle({
      title: vm.options.className
    })
    wx.showLoading({
      title: '数据加载中...',
      mask:true
    })
    
    //对应的二级资源
    vm.check(vm.options.code);  
    //头部接口
    wx.request({
      url: this.data.HOST + 'CmsActiveService/getFenleiBycode?code=C0101&clientType=3&platform=3',
      success: function (res) {
        //重新组装1个全部对象到数据中
       var json =  {
         entity:{
           "code": vm.options.code,
           "className": "全部",
         }         
        }
       var childsWork = res.data.entitys[0].childs[vm.options.index].childs;
       childsWork.unshift(json)
        vm.setData({
          collection: res.data.entitys[0].childs[vm.options.index],
          allCode: vm.options.code,
          activePage: 0
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