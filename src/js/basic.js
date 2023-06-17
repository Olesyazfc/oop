export class Character {
    constructor(name, type, attack, defence) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;

      const heroes = ["Bowman", "Daemon", "Magician", "Swordsman", "Undead", "Zombie"]

      if (2 > name.length || name.length > 10) {
        throw new Error('В имени должно быть от 2 до 10 символов')
      }
      if (heroes.includes(type) === false) {
        throw new Error('Выберите существующий тип')
      }
    }
    levelUp() {
      if (this.health < 1) {
        throw new Error('Персонаж мертв')
      } 
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
    damage(points) {
      if (this.health < 1) {
        throw new Error('Персонаж мертв')
      } 
      this.health -= points * (1 - this.defence / 100)
    }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
    this.attack = 25;
    this.defence = 25;
  }

}

export class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 40;
    this.defence = 10;
  }

}

export class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 10;
    this.defence = 40;
  }

}

export class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
    this.attack = 10;
    this.defence = 40;
  }

}

export class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
    this.attack = 25;
    this.defence = 25;
  }

}

export class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 40;
    this.defence = 10;
  }

}