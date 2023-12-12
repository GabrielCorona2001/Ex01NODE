const villains = [
    {
        id: 1, nome: "Lex Luthor", pontosDePoder: 80
    },
    {
        id: 2, nome: "Capitão Feio", pontosDePoder: 120
    }
]

const createVillain = (req, res) => {
    const {id, nome, pontosDePoder} = req.body;
    const newVillain = {id, nome, pontosDePoder};
    villains.push(newVillain);
    res.json(newVillain);
}

export { createVillain, villains}