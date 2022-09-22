import { Router } from 'express'
import * as todosCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */

// GET
router.get('/', todosCtrl.index)
// NEW
router.get('/new', todosCtrl.new)

export {
  router
}
