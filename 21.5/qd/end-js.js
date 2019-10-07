$(document).ready(function(){
				var textarea = $("textarea")[0];
				var statements = "Em cảm thấy vui không ❤️\nChúc em sinh nhật vui vẻ ❤️\nNhắc đến món quà thì cuốn sổ anh tặng cho em thì nó không ý nghĩ lắm\nĐiều anh muốn là em sẽ vẽ hay ghi vào đó những kỉ niệm đẹp của đôi ta\nAnh muốn đôi ta luôn được vui vẻ là không có gây nhau gì hết\nMặc anh 2 ta cãi nhau thì cũng không đến nỗi mất tình cảm của chúng ta\nMãi thương anh nha em❤️\n I love you❤️";
				var counter = 0;

				setInterval(function(){
					textarea.innerHTML += 
					statements.charAt( counter );
					counter++;
				}, 80)
				var x = setInterval(function(){   
					$("textarea").scrollTop($("textarea")[0].scrollHeight)
					},0);
					setTimeout(function(){clearInterval(x)},70000)
			})