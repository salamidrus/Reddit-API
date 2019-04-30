// setting thr prerequisites
const express = require('express');

// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
