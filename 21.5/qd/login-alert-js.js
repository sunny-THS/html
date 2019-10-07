window.onload = function(){
const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  background:'#fff',
  timer: 3000
});

toast({
  type: 'success',
  title: 'Sinh nhật vui vẻ em yêu ❤️'
})
}