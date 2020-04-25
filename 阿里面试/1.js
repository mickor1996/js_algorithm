let object = {
  "myOrderList_1": [
    "orderCard_2020022533011001790099914002",
    "orderCard_2020022533011001790099603001"
  ],
  "orderCard_2020022533011001790099914002": [
    "orderInfo_2020022533011001790099914002"
  ],
  "orderCard_2020022533011001790099603001": [
    "orderInfo_2020022533011001790099603001",
    "subOrderInfo_2020022533011001790099603002"
  ]
}


// "myOrderList_1": {
//   "children": [
//     {
//       "orderCard_1": {
//         "children": [
//           {
//             "orderInfo_1": {
//               "children": []
//             }
//           }
//         ]
//       },
//       "orderCard_2": {
//         "children": [
//           {
//             "orderInfo_2": {
//               "children": []
//             }
//           },
//           {
//             "subOrderInfo_2": {
//               "children": []
//             }
//           }
//         ]
//       }
//     }
//   ]
// }

function toTree(object) {
  let t = new Object()
  for (let i in object) {
    findChild(object, i, t["children"])
  }
  function findChild(p, o, t) {

    if (object[o] == null) {
      return []
    }
    for (let i of p[o]) {
      let children = new Object()
      children["children"] = findChild(p[o], i)
      t["children"] = children["children"]

    }
    return p[o]
  }
  return t
}
let b = toTree(object)
a = 0

