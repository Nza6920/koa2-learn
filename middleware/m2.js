function m2(ctx) {
    global.console.log("自定义中间件m2")
}

module.exports = function () {
    return async function(ctx, next) {
        global.console.log("m2 开始")
        m2(ctx)
        await next()
        global.console.log("m2 结束")
    }
}