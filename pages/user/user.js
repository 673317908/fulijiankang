// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    levelChildren: false, //会员等级
    sexChildren: false, //性别选择
    flag: true, //遮罩层
    activeIndex: -1, //选中样式索引
    btnList: [{
        id: 1,
        btntext: "会员等级",
        children: [{
            id: 1,
            text: "无等级"
          },
          {
            id: 2,
            text: "普通会员"
          },
          {
            id: 3,
            text: "高级会员"
          },
        ]
      },
      {
        id: 2,
        btntext: "性别",
        children: [{
            id: 1,
            text: "先生"
          },
          {
            id: 2,
            text: "女士"
          }
        ]
      }
    ],
    userList: [{
        id: 1,
        level: "无等级",
        name: "张先生"
      },
      {
        id: 2,
        level: "普通会员",
        name: "趁先生"
      }
    ]
  },
  // 等级
  showLevel() {
    var show = this.data.levelChildren
    const {
      flag
    } = this.data
    if (show == true) {
      this.setData({
        levelChildren: false,
        flag: true
      })
    } else if (show == false) {
      this.setData({
        levelChildren: true,
        sexChildren: false,
        flag: false
      })
    }
  },
  // 性别
  showSex() {
    var show = this.data.sexChildren
    const {
      levelChildren
    } = this.data
    if (show == true) {
      this.setData({
        sexChildren: false,
        flag: true
      })
    } else if (show == false) {
      this.setData({
        sexChildren: true,
        levelChildren: false,
        flag: false
      })
    }
  },
  // 遮罩层
  showze() {
    this.setData({
      flag: true,
      levelChildren: false,
      sexChildren: false
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