
const tabla = async (m,l,s) => {
    tit = '';
    acum = '';
    acumc = '';
    tit = tit+"=================\n"
    tit = tit+"   TABLA DEL "+m+"\n"
    tit = tit+ "=================\n"
    for (x=1;x<=l;x++) {
         acumc = acumc+`${m} `.yellow.underline+`X`.blue.underline+` ${x} `.red.underline+`=`.green.underline+` ${ m * x}\n`.rainbow.underline;
         acum = acum+`${m} X ${x} = ${ m * x}\n`;
    }
    if  (s) {
        console.log (tit.green+acumc)
    }
    return tit+acum
}

module.exports = {
      tabla
}