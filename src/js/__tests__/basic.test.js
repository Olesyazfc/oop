import Character from '../basic.js'
import Bowman from '../Bowman.js'

const level2 = {"name":"Bobby","type":"Bowman","health":100,"level":2, "attack":30,"defence":30}

test('повышение уровня с имеющимся здоровьем', () => {
  const char = new Bowman('Bobby', 'Bowman'); 
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

