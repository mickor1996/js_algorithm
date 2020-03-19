// 题目描述
// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
function movingCount(threshold, rows, cols) {
    if (rows == 0 || cols == 0 || threshold < 0) {
        return 0
    }
    let visit = []
    let num = 0
    let q = []
    for (let i = 0; i < rows; i++) {
        let v = []
        for (let j = 0; j < cols; j++) {
            v.push(1)
        }
        visit.push(v)
    }
    q.push([0, 0])
    num++
    visit[0][0] = 0
    while (q.length) {
        let temp = q.shift()
        if (visit[temp[0]][temp[1] + 1] && isSatisfied(threshold, [temp[0], temp[1] + 1])) {
            visit[temp[0]][temp[1] + 1] = 0
            q.push([temp[0], temp[1] + 1])
            num++
        }
        if (visit[temp[0]][temp[1] - 1] && isSatisfied(threshold, [temp[0], temp[1] - 1])) {
            visit[temp[0]][temp[1] - 1] = 0
            q.push([temp[0], temp[1] - 1])
            num++
        }
        if (temp[0] < rows - 1 && visit[temp[0] + 1][temp[1]] && isSatisfied(threshold, [temp[0] + 1, temp[1]])) {
            visit[temp[0] + 1][temp[1]] = 0
            q.push([temp[0] + 1, temp[1]])
            num++
        }
        if (temp[0] > 0 && visit[temp[0] - 1][temp[1]] && isSatisfied(threshold, [temp[0] - 1, temp[1]])) {
            visit[temp[0] - 1][temp[1]] = 0
            q.push([temp[0] - 1, temp[1]])
            num++
        }
    }
    return num
}
function isSatisfied(threshold, temp) {
    let sum = 0
    let temp_0 = temp[0]
    let temp_1 = temp[1]
    do {
        sum += temp_0 % 10
        temp_0 = Math.floor(temp_0 / 10)
    } while (temp_0 / 10 > 0)
    do {
        sum += temp_1 % 10
        temp_1 = Math.floor(temp_1 / 10)
    } while (temp_1 / 10 > 0)
    if (sum <= threshold) {
        return true
    }
    return false
}
console.log(isSatisfied(15, [9, 19]))
console.log(movingCount(-10, 20, 20))