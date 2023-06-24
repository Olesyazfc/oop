export default class Character {
    constructor(name, type) {

      const heroes = ["Bowman", "Daemon", "Magician", "Swordsman", "Undead", "Zombie"]

      if (2 > name.length || name.length > 10) {
        throw new Error('В имени должно быть от 2 до 10 символов')
      }
      if (!heroes.includes(type)) {
        throw new Error('Выберите существующий тип')
      }

      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;

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