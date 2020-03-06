function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length == 0){
      return 0
    }
    let min = rotateArray[0]
    for (let i of rotateArray) {
      if(i < min){
        return i
      }
    }
}
a = [6501,6828,6963,7036,7422,7674,8146,8468,8704,8717,9170,9359,9719,9895,9896,9913,9962,154,293,334,492,1323,1479,1539,1727,1870,1943,2383,2392,2996,3282,3812,3903,4465,4605,4665,4772,4828,5142,5437,5448,5668,5706,5725,6300,6335]
console.log(minNumberInRotateArray(a))