const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
import router from "@/router";

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use('/reg', router.push("/auth"))


const port = process.env.PORT || 8080

app.listen(port)
console.log('front launch on port' + port);