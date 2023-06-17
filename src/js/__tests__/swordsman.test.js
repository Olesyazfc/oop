import {Character, Swordsman} from '../basic.js'

test('Верный ввод Swordsman', () => {
    const received = new Swordsman('Berny', 'Swordsman');
    const expected = {
      name: 'Berny',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(received).toEqual(expected);
  });

test('Неверное имя Swordsman', () => {
    expect(() => new Character('S', 'Swordsman')).toThrow();
});

test('Неверный тип Swordsman', () => {
    expect(() => new Character('Berny', 'Thief')).toThrow();
});