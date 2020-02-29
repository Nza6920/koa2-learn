function m1(ctx) {
    global.console.log("自定义中间件m1")
}

module.exports = function () {
    return async function(ctx, next) {
        global.console.log("m1 开始")
        m1(ctx)
        await next()
        global.console.log("m1 结束")
    }
}