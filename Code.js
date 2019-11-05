function decomp(n) {
  // your code
  //console.log(n);
  var resul=1;
  var cadena = "";
  var div = 2;
  var con = 0;
  var x=[];
  var y=[];
  for (var i=1; i<=n ;i++){
    resul = resul * i;
  }
  //console.log(resul);
  i=0;
  while(resul != 1){
  //console.log("resul % div "+resul % div);
    if(resul % div == 0){
      resul = resul / div;
      //console.log("resul "+resul);
      con++;
      x[i] = div;
      y[i] = con;
      //console.log("x[i] "+i+" "+x[i]);
      //console.log("y[i] "+i+" "+y[i]);
    }
    else {
      div++;
      con = 0;
      i++;
    }
  }
  i=0;
  while(i!=x.length){
    if(y[i]!=undefined){
      if(y[i]==1){
        cadena += ""+x[i]+" * ";
      }
      else{
        cadena += ""+x[i]+"^"+y[i]+" * ";
      }
      i++;
      //console.log(cadena);
      }
      else{
        i++;
      }
  }
  return cadena.substring(0,cadena.length-3);
}

//*********TDD**************
describe("decomp",() => {
	it("5 Basic tests",() => {
		Test.assertEquals(decomp(17), "2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17")
		Test.assertEquals(decomp(5), "2^3 * 3 * 5")
		Test.assertEquals(decomp(22), "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19")
		Test.assertEquals(decomp(14), "2^11 * 3^5 * 5^2 * 7^2 * 11 * 13")
	})
})
