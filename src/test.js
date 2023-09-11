import { orderByProps } from './index'
import { showAttackDescription } from './index'

test('totalCost', () => {
    const cart = new Cart();
    cart.add({price: 200, id: 1});
    cart.add({price: 100, id: 2});
    cart.add({price: 300, id: 3});
    const result = cart.totalCost();
    expect(result).toBe(600);
})

test('test', () => {
  const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
}
  const result = showAttackDescription(character)
  expect(result).toEquals({
  id: 9,
  name: 'Нокаутирующий удар',
  icon: 'http://...',
  description: 'Описание недоступно'
})
})
