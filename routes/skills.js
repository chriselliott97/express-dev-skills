import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */

// GET
router.get('/', skillsCtrl.index)
// GET -- NEW
router.get('/new', skillsCtrl.new)
// GET
router.get('/:id', skillsCtrl.show)
// POST NEWLY CREATED SKILL
router.post('/', skillsCtrl.create)
// DELETE
router.delete('/:id', skillsCtrl.delete)

export {
  router
}
