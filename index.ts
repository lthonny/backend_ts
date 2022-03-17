import {Router} from "express";

const express = require('express');
const app = express();

const {APP_PORT, DB_HOST} = require('./config/env').config().parsed;

const PORT = APP_PORT || 5000;

const router: Router = require('./routes/index');
app.use('/api', router);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}, URL ${DB_HOST}:${APP_PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();