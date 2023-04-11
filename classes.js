//TwilightSparkle, RainbowDash
//PrincesaCadance, PinkiePie
//Rarity, ShiningArmor




class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
    this.name = name;   //Sempre que eu criar um personagem preciso dizer o nome dele por padrão. TEMPLATE
    }

    get life() {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

//MAGOS
class TwilightSparkle extends Character {
    constructor(name) {
        super('Twilight Sparkle');
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class RainbowDash extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class PrincesaCadance extends Character {
    constructor(name) {
        super(name);
        this.life = 50;
        this.attack = 8;
        this.defense = 7;
        this.maxLife = this.life;
    }
}

//MONSTROS
class PinkiePieMonster extends Character {
    constructor(name) {
        super('Pinkie Pie');
        this.life = 65;
        this.attack = 5;
        this.defense = 10;
        this.maxLife = this.life;
    }
}

class RarityMonster extends Character {
    constructor(name) {
        super('Rarity');
        this.life = 85;
        this.attack = 6;
        this.defense = 7;
        this.maxLife = this.life;
       /* this.src = './assets/rarity.png';
        this.src.style.width = '75px';
        this.style.marginLeft = '100px';*/
    }
}

class ShiningArmorMonster extends Character {
    constructor(name) {
        super('Shining Armor');
        this.life = 85;
        this.attack = 6;
        this.defense = 7;
        this.maxLife = this.life;
        
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) { //fighter 1 / 1E1 é o nome do jogador e o elemento dele.
       
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
       

        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.log = logObject;
       
    }

    start() {
        this.update(); //Tudo evendo do botão de atacar

        this.fighter1El.querySelector('.attackButton').addEventListener('click', ()=>this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attackButton').addEventListener('click', ()=>this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;

        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;
        
        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
       
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;

    }

    doAttack(attacking, attacked) {
       
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage(`Atacando unicórnio morto.`);
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);
       

        let actualAttack = attacking.attack * attackFactor;
        let actuaDefensek = attacking.defense * defenseFactor;

        if(actualAttack > actuaDefensek) {
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            this.log.addMessage(`${attacked.name} conseguiu defender...`)
        }

        console.log(actualAttack)

        this.update();
    }
}

class Log {
    list = [];
    

    constructor(listEl) {
        this.listEl = listEl; 
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';
        
        for (let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[1]}</ li>`;
        }
    }
}


