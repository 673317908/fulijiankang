// pages/cardInfo/cardInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnList:[
      {
        id:1,
        btntext:"卡项权益"
      },
      {
        id:2,
        btntext:"赠送卡项"
      }
    ],
    activeIndex:0,
    activeId:true
  },
  active(event){
    const {index} =event.currentTarget.dataset
    var show=this.data.activeId
    if(show==true ){
      this.setData({
        activeId:false
      })
    }else if (show==false) {
      this.setData({
        activeId:true
      })
    }
    this.setData({
      activeIndex:index
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