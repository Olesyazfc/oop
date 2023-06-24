import Character from '../basic.js'
import Undead from '../Undead.js';

test('Верный ввод Undead', () => {
    const received = new Undead('Berny', 'Undead');
    const expected = {
      name: 'Berny',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(received).toEqual(expected);
  });

test('Неверное имя Undead', () => {
    expect(() => new Character('U', 'Undead')).toThrow();
});

test('Неверный тип Undead', () => {
    expect(() => new Character('Berny', 'Thief')).toThrow();
});