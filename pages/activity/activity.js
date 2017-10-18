//index.js
//获取应用实例
const app = getApp()
var WxParse = require('../../wxParse/wxParse.js');

Page({
  tapGoList: function (event) {
    wx.navigateTo({
      url: "../activityMsg/activityMsg?code=" + event.currentTarget.id+""
    })
  },
  data: {
    HOST: getApp().globalData.Host,
    activityList: [] //活动列表
  },
  onLoad: function (options) {
    var that = this;
    var article = '<div>我是HTML代码</div>';
    // WxParse.wxParse('article', 'html', article, that, 5)
  },
  onReady: function () {  
    var vm = this;
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    //动态设置title
    // wx.setNavigationBarTitle({
    //   title: vm.options.className
    // })
    // wx.showLoading({
    //   title: '数据加载中...',
    //   mask: true
    // })
   
    
    //头部接口
    wx.request({
      url: this.data.HOST + 'webService/getEntitysByLM?pageNo=1&pageSize=10&lang=0&LM=L0501&clientType=2',
      success: function (res) {
        console.log(res.data.entitys);     
        vm.setData({
          // activityList: WxParse.wxParse('activityList', 'html', res.data.entitys, that, 5)
          activityList: res.data.entitys,
        })  
        wx.hideLoading()
      }
    })

  },
 
})
