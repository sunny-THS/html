function wishes() {
  let text = `Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries.
Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.
Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign.
Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. If you need to stop reading before you reach the end, Word remembers where you left off - even on another device.
`;
  console.log(text.length);
  let a = 0;
  let x = setInterval(()=>{
    if (a < text.length) {
      document.getElementById('text').innerHTML += text.charAt(a++);
    }else {
      $('.page2 .card .cake').css({'display':'none'});
      clearInterval(x);
    }
    $('#text').scrollTop($('#text')[0].scrollHeight);
  }, 80);

}
