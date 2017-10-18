// pages/collectionMsg/collectionMsg.js
Page({
  //事件处理函数
  // tapGoList: function (event) {
  //   wx.navigateTo({
  //     url: '../collectionList/collectionList'
  //   })
  // }, 
  //点击视频按钮打开播放视频
  startVideo:function(){
    this.setData({
      video_iss: true
    })
    this.audioPause();
  },
  // 点击关闭视频
  closeVideo:function(){
    this.setData({
      video_iss: false
    })
    //设置数据改变dom
    this.setData({
      condition: !this.data.condition
    })
  },
  isMp3: function (event) {
    //设置数据改变dom
    this.setData({
      condition: !this.data.condition
    })
    //播放mp3
    if(event.currentTarget.id==="0"){
      this.audioPlay();
    }else{
      this.audioPause();
    }  
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  bindfullscreenchanges:function(){
    console.log('全屏触发')
    return;
  },
  /**
   * 页面的初始数据
   */
  data: {
    HOST: getApp().globalData.Host,
    collectionMsg: [], //藏品最终详情
    condition:true,
    video_iss:false,
    mp3:{
          poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
          name: '此时此刻',
          author: '许巍',
          src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    },
    video:{
        src: '',
        danmuList: [
          {
            text: '第 1s 出现的弹幕',
            color: '#ff0000',
            time: 1
          },
          {
            text: '第 3s 出现的弹幕',
            color: '#ff00ff',
            time: 3
          }
          ]
    }
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
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')

    this.videoContext = wx.createVideoContext('myVideo')

    //获得每个的详细信息
    var vm = this;
    wx.request({
      url: this.data.HOST + 'webAppCollection/collectionDetail?id=' + vm.options.id+'&resType=CmsCollection&lang=0&clientType=3&platform=3',
      success: function (res) {
        vm.setData({
          collectionMsg: res.data.entity        
        })
        
        //动态设置title
        wx.setNavigationBarTitle({
          title: res.data.entity.showName
        })
        wx.hideLoading()
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