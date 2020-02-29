function pv(ctx) {
    ctx.session.count ++
    global.console.log("自定义中间件: " + ctx.path)
}

module.exports = function () {
    return async function(ctx, next) {
        pv(ctx)
        await next()
    }
}