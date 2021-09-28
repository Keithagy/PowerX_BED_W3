const express = require('express')

module.exports = (db) => {
  const router = express.Router()
  
  router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    const items = await db.findAllItemsUnderUser(id)
    if (items) {
      res.send(items)
    } else {
      res.status(400).send(`No items under user ${id}`)
    }
  })

  return router
}