const http = require('http')

const gagan = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('my name is gagan')
    res.end()
})

gagan.listen(5000,()=>{
    console.log('server connected')
})


