import Character from '../basic.js'
import Zombie from '../Zombie.js';

test('Верный ввод Zombie', () => {
    const received = new Zombie('Berny', 'Zombie');
    const expected = {
      name: 'Berny',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(received).toEqual(expected);
  });

test('Неверное имя Zombie', () => {
    expect(() => new Character('Z', 'Zombie')).toThrow();
});

test('Неверный тип Zombie', () => {
    expect(() => new Character('Berny', 'Thief')).toThrow();
});