let date = "2019 - 12 -1"
function num_day(date) {
  let l = date.split("-")
  let y = parseInt(l[0])
  let m = parseInt(l[1])
  let d = parseInt(l[2])
  let num = 0
  let d_m_1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let d_m_2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if (y % 4 == 0 && y % 100 != 0 || y % 4 == 0 && y % 400 == 0) {
    for (let i = 0; i < m - 1; i++) {
      num += d_m_2[i]
    }
    num += d
  } else {
    for (let i = 0; i < m - 1; i++) {
      num += d_m_1[i]
    }
    num += d
  }
  return num
}
console.log(num_day(date))