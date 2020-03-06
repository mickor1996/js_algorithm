function replaceSpace(str)
{
    // write code here
    while(str.indexOf(' ')!=-1){
      str=str.replace(' ','%20')
    }
    return str
}
