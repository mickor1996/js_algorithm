/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  let visit = new Array(graph.length).fill(0)
  let flag = true
  for (let i = 0; i < graph.length; i++) {
    if (visit[i] == 0) flag = flag && dfs(i, 1)
  }
  return flag
  function dfs(i, c) {
    if (visit[i] != 0 && visit[i] != c) {
      return false
    } else if (visit[i] == 0) {
      let flag = true
      visit[i] = c
      for (let j = 0; j < graph[i].length; j++) {
        flag = flag && dfs(graph[i][j], -c)
      }
      return flag
    }
    return true
  }
};
console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]))