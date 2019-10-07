window.onload=function() {
	const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

toast({
  type: 'success',
  title: 'Signed in successfully'
})
}