import { Router } from "express";
import {create,drop } from '../controllers/auth.controller.js'
//Routers :Diferents fuctions, Create, Delete, etc and difference request, GET POST

const router= Router();

router.post('/create',create)//Route to create a review
router.post('/drop',drop)//Route to delete review

export default router