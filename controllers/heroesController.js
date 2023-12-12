const heroes = [

    { id: 1, nome: "Superman", pontosDePoder: 100 },
    { id: 2, nome: "Cebolinha", pontosDePoder: 60 },
]

const createHero = (req, res) => {
    const { id, nome, pontosDePoder } = req.body;
    const newHero = { id, nome, pontosDePoder }
    heroes.push(newHero)
    res.json(newHero);
}


export { createHero, heroes }