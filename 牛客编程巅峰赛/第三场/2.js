
function Point(a, b) {
  this.x = a || 0;
  this.y = b || 0;
}


/**
 * 从 1 到 n 每个结点的权值。
 * @param n int整型 
 * @param Edge Point类一维数组 (u, v) 集合
 * @param q int整型 
 * @param Query Point类一维数组 Point.x 为题中 r, Point.y为题中 v
 * @return long长整型一维数组
 */
function solve(n, Edge, q, Query) {
  // write code here
  let array = new Array(n + 1).fill(0)
  for (let i = 0; i < q; i++) {
    let r = Query[i].x
    let v = Query[i].y
    let visit = new Array(Edge.length).fill(0)
    let add = []
    dfs(1, r, v, visit, add)
    for (let i of add) {
      array[i] += v
    }
  }
  return array.slice(1)
  function dfs(h, r, v, visit, add) {
    for (let i = 0; i < Edge.length; i++) {
      if (visit[i] == 1) continue
      if (Edge[i].x == h) {
        visit[i] = 1
        if (Edge[i].x == r || Edge[i].y == r) {
          if (add.indexOf(Edge[i].x) == -1) {
            add.push(Edge[i].x)
          }
          if (add.indexOf(Edge[i].y) == -1) {
            add.push(Edge[i].y)
          }
          dfs(Edge[i].y, Edge[i].y, v, visit, add)
        } else {
          dfs(Edge[i].y, r, v, visit, add)
        }

      }
      if (Edge[i].y == h) {
        visit[i] = 1
        if (Edge[i].y == r || Edge[i].x == r) {
          if (add.indexOf(Edge[i].x) == -1) {
            add.push(Edge[i].x)
          }
          if (add.indexOf(Edge[i].y) == -1) {
            add.push(Edge[i].y)
          }
          dfs(Edge[i].x, Edge[i].x, v, visit, add)
        } else {
          dfs(Edge[i].x, r, v, visit, add)
        }

      }
    }


  }
}
console.log(solve(5, [new Point(2, 5), new Point(5, 3), new Point(5, 4), new Point(5, 1)], 1, [new Point(2, -1)]))
module.exports = {
  solve: solve
};