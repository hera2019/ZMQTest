// 这里可以添加一些背景脚本代码
chrome.commands.onCommand.addListener(function(command) {
  if (command === "popup_window") {
    // 使用chrome.windows.create创建一个小窗口
    chrome.windows.create({
      url: "popup.html",
      type: "popup",
      width: 400, // 设置窗口宽度
      height: 300 // 设置窗口高度
    });
  }
});

// 下面繼續5次提交測試
// 測試分支

