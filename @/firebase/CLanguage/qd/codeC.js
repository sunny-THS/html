var getCodeC = (name, info) => {
  for (var i in info) {
    var a = document.createElement('a');
    document.getElementById('code').appendChild(a);
    a.href = info[i];
    a.innerHTML = `${name[i]}`;
  }
}
