import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: "Hello World!"});
});

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send();
});

app.post('/partners', (req, res) => {
  const { name, email, password, company_name } = req.body;
});

app.post('/customers', (req, res) => {
  const { name, email, password, address, telephone } = req.body;
});

// Criação do evento pelo parceiro
app.post('/partners/events', (req, res) => {
  const { name, description, date, location } = req.body;
});

// Listagem de evento do parceiro
app.get('/partners/events/:eventId', (req, res) => {
  const { eventId } = req.params;
  console.log(eventId);
  res.send();
});

app.post('/events', (req, res) => {
  const { name, description, date, location } = req.body;
});

app.get('/events/:eventId', (req, res) => {
  const { eventId } = req.params;
  console.log(eventId);
  res.send();
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
});
