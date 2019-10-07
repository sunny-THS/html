console.log('%cHello World!', 'font-size:50px;color:blue');
console.log('%c Tính giai thừa', 'font-size:30px;color:red');
/*
##############    ########      ##########
#############   ##        ##    ###      ##
###             ##        ##    ###      ##
############    ##        ##    ###      ##
##########      ##        ##    #########
###             ##        ##    ##      ##
###             ##        ##    ##       ##
##              ##        ##    ##        ##
#                ##########     ##         ##
*/
function giaithua(e) {
  let i = 1;
  let result = 1;
  console.log('Gồm '+e+' giai thừa:');
  for(i; i<e; i++) {
    result*=i;
    console.log(i + '! = ' + result);
  }
}
//##################################################
