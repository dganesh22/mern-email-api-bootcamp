// router request with api path

// express router
const appRouter = require('express').Router()

// import the controller
const home = require('../controller/appController')

// router.request(path,controller)
appRouter.post(`/send`, home)

// export the router
module.exports = appRouter