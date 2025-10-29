// src/index.ts
import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
