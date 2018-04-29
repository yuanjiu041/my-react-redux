const test = (ctx) => {
  ctx.body = {
    code: 0,
    data: 'yexunbaba'
  }
}

test.method = 'get'
test.route = 'test'

module.exports = {
  test
}
