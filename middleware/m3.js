function m3(ctx) {
    global.console.log("自定义中间件m3")
}

module.exports = function () {
    return async function(ctx, next) {
        global.console.log("m3 开始")
        m3(ctx)
        await next()
        global.console.log("m3 结束")
    }
}