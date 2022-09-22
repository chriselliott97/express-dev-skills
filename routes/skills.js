import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */

// GET
router.get('/', skillsCtrl.index)
// NEW
router.get('/new', skillsCtrl.new)
// POST NEWLY CREATED SKILL
router.post('/', skillsCtrl.create)


export {
  router
}
