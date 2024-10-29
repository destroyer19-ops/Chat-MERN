import express from 'express'
import protectRoutes from '../middleware/protectRoutes.js';
import {getUsersForSideBar} from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", protectRoutes, getUsersForSideBar)
export default router;