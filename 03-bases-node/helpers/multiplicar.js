
const tabla = async (m,l,s) => {
    tit = '';
    acum = '';
    tit = tit+"=================\n"
    tit = tit+"   TABLA DEL "+m+"\n"
    tit = tit+ "=================\n"
    for (x=1;x<=l;x++) {
         acum = acum+`${m} `.yellow.underline+`X`.blue.underline+` ${x} `.red.underline+`=`.green.underline+` ${ m * x}\n`.rainbow.underline;
    }
    if  (s) {
        console.log (tit.green+acum)
    }
    return tit+acum
}

module.exports = {
      tabla
}