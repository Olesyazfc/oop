import {Character, Bowman} from '../basic.js'

test('Верный ввод Bowman', () => {
    const received = new Bowman('Berny', 'Bowman');
    const expected = {
      name: 'Berny',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(received).toEqual(expected);
  });

test('Неверное имя Bowman', () => {
    expect(() => new Character('B', 'Bowman')).toThrow();
});

test('Неверный тип Bowman', () => {
    expect(() => new Character('Berny', 'Thief')).toThrow();   
});