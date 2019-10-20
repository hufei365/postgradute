// pages/english/english.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ index: 0, word: 'first' }, { index: 1, word: 'second' }, { index: 2, word: 'third' }],
    showAnswer: false,
    current: {
      index: 1,
      word: 'second'
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

  },
  touchStart: function (e) {
    this.setData({
      "touch.x": e.changedTouches[0].clientX,
      "touch.y": e.changedTouches[0].clientY
    });
  },
  touchEnd: function (e) {
    let { list, current } = this.data;
    let direction = this.getTouchData(e.changedTouches[0].clientX, e.changedTouches[0].clientY, this.data.touch.x, this.data.touch.y)
    if (list[current.index + direction]) {
      this.setData({ current: list[current.index + direction] })
      this.toggleShowAnswer()
    } else {
      console.log('there is no more word')
    }
  },
  /***
 * 判断用户滑动
 * 左滑还是右滑
 */
  getTouchData: function (endX, endY, startX, startY) {
    let turn = 0;
    if (endX - startX > 50 && Math.abs(endY - startY) < 50) {      //右滑
      turn = -1;
    } else if (endX - startX < -50 && Math.abs(endY - startY) < 50) {   //左滑
      turn = 1;
    }
    return turn;
  },

showChinese: function(){
  this.toggleShowAnswer()
},
toggleShowAnswer: function(){
  this.setData({
    showAnswer: !this.data.showAnswer
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