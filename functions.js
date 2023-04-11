const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createCadance = () => {
    return {
        ...defaultCharacter,
        name: "Princesa Cadance",
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createRainbow = () => {
    return {
        ...defaultCharacter,
        name: "Rainbow Dash",
        life: 80,
        maxLife: 100,
        attack: 8,
        defense: 7
    }
}

const createTwilight = () => {
    return {
        ...defaultCharacter,
        name: "Twilight Sparkle",
        life: 70,
        maxLife: 60,
        attack: 10,
        defense: 9
    }
}

const createarity = () => {
    return {
        ...defaultCharacter,
        name: "Rarity Monster",
        life: 80,
        maxLife: 90,
        attack: 10,
        defense: 7
    }
}