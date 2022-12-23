import path from 'path';
import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import indexRouter from './routers/indexRouter';
import apiRouter from './routers/apiRouter';
import catalogRouter from './routers/catalogRouter';
import adminRouter from './routers/adminRouter';
import jsxRender from './utils/jsxRender';
import { pathMiddleware } from './middlewares/pathMiddleware';
import authRouter from './routers/authRouter';
import orderRouter from './routers/orderRouter';
import isAdmin from './middlewares/isAdmin';

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  // если true, то в хранилище будут попадать пустые сессии
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(pathMiddleware);

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/catalog', catalogRouter);
app.use('/admin', adminRouter);
app.use('/order', orderRouter);

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
