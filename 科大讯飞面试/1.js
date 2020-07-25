/*
 *  要求，尝试完成如下功能：
 *
 *  isString('hello')              = true
 *  isString(123)                  = false
 *  isString(undefined)            = false
 *  isString(null)                 = false
 *  isString(new String('hello'))  = true
 *
 **/
function isString(value) {
  // TODO
  return (typeof value) == 'string' || ((typeof value == 'object') && value instanceof String)
}

console.log(isString(new String('hello')))
// simple query string parser
// Example:
// Input: 'a=1&b=2'
// Output: { a: 1, b: 2 }
function qsParse(query) {
  // TODO
  let Output = {}
  query = query.split("&")
  for (let i = 0; i < query.length; i++) {
    query[i] = query[i].split('=')
    // while (query[i][0].indexOf('.') != -1) {
    //   let temp = {}
    //   query[i][0] = query[i][0].split('.')
    //   temp[query[i][query[i][0].length - 1]] = query[i][1]
    //   query[i][query[i][0].length - 1] = temp
    //   for (let j = query[i][0].length - 1; j >= 1; j--) {
    //     temp = {}
    //     temp[query[i][0][j]] = query[i][0][j + 1]
    //     query[i][0][j] = temp
    //   }
    // }
    if (Output[query[i][0]] == undefined) {
      Output[query[i][0]] = query[i][1]
    } else {
      if (Array.isArray(Output[query[i][0]])) {
        Output[query[i][0]] = [...Output[query[i][0]], query[i][1]]
      } else {
        Output[query[i][0]] = new Array(Output[query[i][0]])
        Output[query[i][0]] = [...Output[query[i][0]], query[i][1]]
      }

    }

  }
  return Output
}
// { a: [1, 2], b: 2, c: { d: { e: 1 } } }
// a.a=1&a.b=2
console.log(qsParse('a=221&a=2&b=1'))