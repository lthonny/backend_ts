import {Router} from "express";

const express = require('express');
const router: Router = express.Router();

const taskRouter = require('../routes/taskRouter');

router.use('/task', taskRouter);

module.exports = router;