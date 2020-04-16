module.exports={
  chainWebpack:config=>{
    config.plugins.delete("prefetch")
  }
}
// 加载首屏时，不会下载任何其它组件。既加快首屏加载速度，又节约网络流量。
// 只有当用户点击链接跳转到一个新页面时，才临时下载该页面的内容。
