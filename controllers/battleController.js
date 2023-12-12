import { heroes } from "./heroesController.js";
import { villains } from "./villainsController.js";

const battle = (req, res) => {
    const { idHero, idVillain } = req.body;
    const hero = heroes.find(hero => hero.id === idHero);
    const villain = villains.find(villain => villain.id === idVillain);

    if (!hero || !villain) {
        res.status(404).json({ error: 'Heroi ou vilão não encontrados' });
        return;
    }

    let result;

    if (hero.pontosDePoder > villain.pontosDePoder) {
        result = `${hero.nome} ganhou de ${villain.nome}! o bem venceu.`;
    } else {
        result = `${villain.nome} ganhou de ${hero.nome}! o mau venceu.`;
    }

    res.json({ batalha: result });
}

export { battle };
