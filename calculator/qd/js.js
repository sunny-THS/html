var π = Math.PI;

function i(num){
    form.result.value += num;
	if(form.xuat.value != ''){
		form.result.value = num;
		form.xuat.value = '';
	} 
	
}

function binhPhuong(){
    form.xuat.value = Math.pow(form.result.value, 2);
	form.result.value += '²';
}
function lapPhuong(){
    form.xuat.value = Math.pow(form.result.value, 3);
	form.result.value += '³';
}

function xMuN(){
    var a = form.result.value;
    var b = prompt(a+"^");
    form.xuat.value = Math.pow(a,b);
	form.result.value += "^" + b;
}

function delAll(){
    form.result.value = '';
}

function del(){
    var stt = form.result.value;
    form.result.value = stt.substring(0,stt.length-1);
}

function equal(){
    form.xuat.value = eval(form.result.value);
}

function canbac2(){
    form.xuat.value = Math.sqrt(eval(form.result.value));
	form.result.value = "√" + form.result.value;
}

function lgs(){
	var s = Math.sin(eval(form.result.value));
    form.xuat.value = s;
	form.result.value = "sin(" + form.result.value + ")";
}

function lgc(){
	var c = Math.cos(eval(form.result.value));
	
    form.xuat.value = c;
	form.result.value = "cos(" + form.result.value + ")";
}

function lgt(){
	var t = Math.tan(eval(form.result.value));
	
    form.xuat.value = t;
	form.result.value = "tan(" + form.result.value + ")";
}

function lgco(){
	var cg = 1/Math.tan(eval(form.result.value));
	
    form.xuat.value = cg;
	form.result.value = "cot(" + form.result.value + ")";
}

function lgas(){
	var as = Math.asin(eval(form.result.value));
	if(Math.PI % a == 0){
		var b = asin / Math.PI;
		a = a + 'π';
	}
    form.xuat.value = a;
	form.result.value = "sin⁻¹(" + form.result.value + ")";
}

function lgac(){
	var ac = Math.acos(eval(form.result.value));
	if(Math.PI % a == 0){
		var b = asin / Math.PI;
		a = a + 'π';
	}
    form.xuat.value = ac;
	form.result.value = "cos⁻¹(" + form.result.value + ")";
}

function lgat(){
	var at = Math.atan(eval(form.result.value));
	if(Math.PI % a == 0){
		var b = asin / Math.PI;
		a = a + 'π';
	}
    form.xuat.value = at;
	form.result.value = "tan⁻¹(" + form.result.value + ")";
}

function lgaco(){
	var acg = 1/ Math.atan(eval(form.result.value));
	if(Math.PI % a == 0){
		var b = asin / Math.PI;
		a = a + 'π';
	}
    form.xuat.value = acg;
	form.result.value = "cot⁻¹(" + form.result.value + ")";
}
