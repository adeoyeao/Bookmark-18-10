const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const requestModel = require("../models/requestModel")
const subscriberModel = require("../models/subscriberModel")

const router = express.Router()
router.use(bodyParser.urlencoded({extended: true}))

router.post("/request", (req, res) => {
      const name = req.body.name
      const email = req.body.email

      const newRequest = new requestModel({
            name: name,
            email: email
      })

      newRequest.save()
      .then(() => res.redirect("/"))
      .catch(err => (console.error(err), res.end()))
})

router.post("/subscribe", (req, res) => {
      const email = req.body.email
      
      const newSubscriber = new subscriberModel({
            email: email
      })

      newSubscriber.save()
      .then(() => res.redirect("/"))
      .catch(err => (console.error(err), res.end()))
})

module.exports = router