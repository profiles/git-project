// pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxcodeimg:''
  },
  onGotUserInfo(e){
    app.globalData.userInfo = e.detail.userInfo;
    wx.request({
      url: app.globalData.ajaxSrc + '/wxuser_add',
      data: {
        openid: app.globalData.userOpenID,
        country: e.detail.userInfo.country,
        province: e.detail.userInfo.province,
        city: e.detail.userInfo.city,
        gender: e.detail.userInfo.gender,
        nickName: e.detail.userInfo.nickName,
        avatarUrl: e.detail.userInfo.avatarUrl
      },
      success: res => {
        wx.redirectTo({
          url: '/pages/index/index'
        })
      },
      fail(){
        wx.navigateTo({
          url: '/pages/error/error'
        })
      }
    })
  },
  getImg(){
    let as = '14_iNxSdSlZbzrJ7neRMME4xFOSV16scTpiLlF82RqPo5fD1bq_wWCjwsZfBI05OSldXM1wUmmCTsbqgaDiTrM4ti4AuTrgAZ-iVPlosEvcasfNiYCOZ6tfwuQym5VJMUjbDi88De_qfhoXHhHcMPCiADACFS',self = this;
    wx.request({
      url:"https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token="+as,
      method:'POST',
      data:{
        scene:'13',
        page:'pages/index/detail'
      },
      responseType:'arraybuffer',
      success:res=>{
        self.setData({
          wxcodeimg:'data:image/png;base64,'+wx.arrayBufferToBase64(res.data)
        })
      }
    })
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