console.log('hello');
chrome.browserAction.onClicked.addListener(buttonClicked);
var i = 0;
function buttonClicked() {
  i++;
  console.log('hello');
  if (i == 2) {
    for (var a = 0; a < 1000000; a++) {
      console.log("error");
    }
  }
}
