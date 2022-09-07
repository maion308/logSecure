const express = require('express')
const port = process.env.PORT || 3000

express().listen(port, () => console.log('server is running'))