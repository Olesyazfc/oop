import Character from '../basic.js'
import Magician from '../Magician.js';

test('Верный ввод Magician', () => {
    const received = new Magician('Berny', 'Magician');
    const expected = {
      name: 'Berny',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40
    };
    expect(received).toEqual(expected);
  });

test('Неверное имя Magician', () => {
    expect(() => new Character('M', 'Magician')).toThrow();
});

test('Неверный тип Magician', () => {
    expect(() => new Character('Berny', 'Thief')).toThrow();
});