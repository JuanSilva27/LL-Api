const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const charactersRouter = require('./routes/characters')
const songsRouter = require('./routes/songs')
const SeiyuusRouter = require('./routes/seiyuu')
const IdolGroupsRouter = require('./routes/idolGroup')
const SubunitsRouter = require('./routes/subunit');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/characters', charactersRouter)
app.use('/songs', songsRouter)
app.use('/seiyuus', SeiyuusRouter)
app.use('/idolGroups', IdolGroupsRouter)
app.use('/subunits', SubunitsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler);

module.exports = app;
