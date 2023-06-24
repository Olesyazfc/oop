import Character from '../basic.js'
import Daemon from '../Daemon.js';

test('Верный ввод Daemon', () => {
    const received = new Daemon('Berny', 'Daemon');
    const expected = {
      name: 'Berny',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(received).toEqual(expected);
  });

test('Неверное имя Daemon', () => {
    expect(() => new Character('D', 'Daemon')).toThrow();
});

test('Неверный тип Daemon', () => {
    expect(() => new Character('Berny', 'Thief')).toThrow();
});