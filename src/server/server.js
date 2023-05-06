const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const moment = require('moment');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const morgan = require('morgan');
const multer = require('multer');
const fetch = require('node-fetch');
const passport = require('passport');
const session = require('express-session');
const prettier = require('prettier');
const request = require('request');
const socketIO = require('socket.io');
const tmi = require('tmi.js');
const uuid = require('uuid');
const winston = require('winston');
const WebSocket = require('ws');

dotenv.config();

const app = express();

app.get(['/', '/home'], (req, res) => {
    res.send('Welcome to the home page!');
});

app.get(['/commands', '/commandlist'], (req, res) => {
    res.send('Here is a list of commands!');
});

app.get('/commands/:commandName', (req, res) => {
    const commandName = req.params.commandName;
    res.send(`Here is the usage for \${commandName} command!`);
});

app.get(['/settings', '/config'], (req, res) => {
    res.send('Welcome to the settings page!');
});

app.get(['/about', '/info'], (req, res) => {
    res.send('Welcome to the about page!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port \${PORT}`);
});