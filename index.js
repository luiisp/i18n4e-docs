import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { i18n4e } from 'i18n4e';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

i18n4e.init(app, {
  langsFolder: path.join(__dirname, '_locales'),
  enableClient: true,
  useLangSession: true,
  i18n4eDefaultSession: true
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/docs', (req, res) => {
  res.render('docs/docs');
});

app.get('/docs/cst', (req, res) => {
  res.render('docs/cst');
});

app.listen(PORT, () => {
  console.log(`Started on http://localhost:${PORT}`);
});
