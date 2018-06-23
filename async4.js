function stats(file){
    return new Promise((resolve, repject) => {
        fs.stat(file, (err, data) => {
            if(err){
                return reject (err)
            }
            resolve(data)
        })
    })
}
Promise.all([
    stats('file1'),
    stats('file2'),
    stats('file3'),
])
    .then((data) => console.log(data))
    .then((err) => console.log(err)) 
