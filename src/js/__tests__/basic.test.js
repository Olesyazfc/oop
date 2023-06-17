import {Character, Bowman, Daemon, Swordsman, Undead, Zombie, Magician} from '../basic.js'

// const characters = [
//     [['char1', 'Bowman'], {"name":"Bowman","type":"Bowman","health":100,"level":1,"attack":25,"defence":25}]
//     [['char2', 'Swordsman'], {"name":"Swordsman","type":"Swordsman","health":100,"level":1,"attack":40,"defence":10}],
//     ['char3', 'Magician'],
//     ['char4', 'Daemon'],
//     ['char5', 'Undead'],
//     ['char6', 'Zombie']
// ]

// const charactersInfo = [
//     {"name":"Bowman","type":"Bowman","health":100,"level":1,"attack":25,"defence":25},
//     {"name":"Swordsman","type":"Swordsman","health":100,"level":1,"attack":40,"defence":10},
//     {"name":"Magician","type":"Magician","health":100,"level":1,"attack":10,"defence":40},
//     {"name":"Daemon","type":"Daemon","health":100,"level":1,"attack":10,"defence":40},
//     {"name":"Undead","type":"Undead","health":100,"level":1,"attack":25,"defence":25},
//     {"name":"Zombie","type":"Zombie","health":100,"level":1,"attack":40,"defence":10}
// ]
// 
// const characters = []

// const handler = test.each(characters)

const level2 = {"name":"Bobby","type":"Bowman","health":100,"level":2,"attack":30,"defence":30}

test('повышение уровня с имеющимся здоровьем', () => {
  const char = new Bowman('Bobby'); 
  char.levelUp() 
  expect(char).toEqual(level2);
});

test('повышение уровня с нулевым здоровьем', () => {
  expect(() => {
    const char = new Bowman('Berny', 'Bowman');
    char.health = 0;
    char.levelUp();
  }).toThrow();
});

const damage20 = {"name":"Bobby","type":"Bowman","health":85,"level":1,"attack":25,"defence":25}

test('урон с имеющимся здоровьем', () => {
  const char = new Bowman('Bobby'); 
  char.damage(20) 
  expect(char).toEqual(damage20);
});

test('урон с нулевым здоровьем', () => {
  expect(() => {
    const char = new Bowman('Berny', 'Bowman');
    char.health = 0;
    char.damage(20);
  }).toThrow();
});

