// ボタンを押すと、.section-scrollへ移動
$(document).ready(function () {
  $("#section-scroll").sectionScroller({
      scrollerButton: "#section-scroller-button",
      scrollType: "easeInOutExpo", // requires jQuery Easing Plugin
      scrollDuration: 600,
  });
});