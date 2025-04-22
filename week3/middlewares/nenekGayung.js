function nenekGayungMiddleware (req,res, next){
    // console.log("INi midelware")
    // next()
    const diaSudah = false
    if (diaSudah){
        next()
    }else{
        console.log("Belum LOGIN");
    }
}

module.exports = nenekGayungMiddleware