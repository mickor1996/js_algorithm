/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    //inDegree[i]表示第i门课还有inDegree[i]门先修课程没有上
    const inDegree = new Array(numCourses).fill(0) // 入度数组
    const graph = {} //图
    const queue = [] //课程队列
    // 将课程的后续课程存起来
    prerequisites.forEach(([cur, pre]) => {
        inDegree[cur]++
        graph[pre] ? graph[pre].push(cur) : graph[pre] = [cur]
    })
    // 将没有先修课程的课程添加到课程队列里
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i)
        }
    }
    while (queue.length) {
        // 从队列中取出一门课程
        const temp = queue.shift()
        if (graph[temp]) {
            // 遍历该课程的所有后续课程
            for (let course of graph[temp]) {
                inDegree[course]--
                // 如果先修课程都修完了的话，将该课程添加课程队列里
                if (inDegree[course] == 0) {
                    queue.push(course)
                }
            }
        }
    }
    // 判断是不是所有课程都能上了
    return inDegree.every(v => v == 0)
};
console.log(canFinish(3
    , [[1, 0], [2, 1]]))