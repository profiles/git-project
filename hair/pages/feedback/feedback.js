// pages/feedback/feedback.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        score:0,
        orderNum:'',
        text:''
    },
    //设置分数
    setScore(e){
        let score = e.currentTarget.dataset.score;
        this.setData({
            score:score
        })
    },
    //获取文本内容
    bindTextAreaBlur(e){
        this.data.text = e.detail.value;
    },
    //回到首页
    doclose(){
        wx.reLaunch({
            url: '/pages/index/index'
        })
    },
    //回到上一页
    doBack(){
        let obj = {};
        obj.openid = app.globalData.userOpenID;
        obj.order_num = this.data.orderNum;
        obj.score = this.data.score;
        obj.content = this.data.text;
        wx.request({
            url:app.globalData.ajaxSrc+"feedback_add",
            data:obj,
            success:res=>{
                if(res.data.status == 1){
                    wx.showToast({
                      title: '提交成功！'
                    });
                    setTimeout(()=>{
                        wx.navigateBack({
                            delta: 1
                        })
                    },1500)
                }
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.data.orderNum = options.orderNum;
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