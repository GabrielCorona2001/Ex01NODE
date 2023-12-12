import express from 'express';
import heroesRoutes from './routes/heroesRoutes.js';
import villainsRoutes from './routes/villainsRoutes.js';
import battleRoutes from './routes/battleRoutes.js';


const app = express();
app.use(express.json());
app.use(heroesRoutes);
app.use(villainsRoutes);
app.use(battleRoutes);

app.listen(3001, () => console.log("servidor rodando aaaa"))