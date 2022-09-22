import { Router } from 'express'
import { skills } from '../data/skills.js'

const router = Router()

/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})

export {
  router
}
