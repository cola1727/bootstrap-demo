// 加载模板
const loadHtml = (url) => $.ajax({ url, async: false }).responseText;

// 渲染变量
const render = (module, params) => {
  let html;
  Object.entries(params).forEach(([key, val]) => {
    html = (html ?? module).replace(
      new RegExp(`\{\{(|[\\s]+)(${key})(|[\\s]+)\}\}`, 'g'),
      val
    );
  });
  return $(html)[0];
};

// 初始化布局方法
const layout = () => {
  // 锚点列表渲染
  const anchors = $('.anchors')[0];
  [
    ['快速连接', './imgs/quick_connect.png'],
    ['文件传输', './imgs/file.png'],
    ['屏幕协同', './imgs/screen.png'],
    ['电话/短信/通知', './imgs/notice.png'],
    ['剪贴板共享', './imgs/paste_share.png'],
  ].forEach(([title, src]) => {
    anchors.appendChild(render(loadHtml('./nav.template'), { title, src }));
  });
};

window.onload = function () {
  layout();
};
