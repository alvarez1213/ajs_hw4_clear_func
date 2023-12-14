import healthStatus from '../user';

test('player feel good', () => {
  const hero = { name: 'маг', health: 100 };
  const result = healthStatus(hero);
  expect(result).toBe('healthy');
});

test('player feel good', () => {
  const hero = { name: 'лучник', health: 30 };
  const result = healthStatus(hero);
  expect(result).toBe('wounded');
});

test('player feel good', () => {
  const hero = { name: 'мечник', health: 5 };
  const result = healthStatus(hero);
  expect(result).toBe('critical');
});

test('player feel good', () => {
  const hero = { name: 'друид', health: 0 };
  const result = healthStatus(hero);
  expect(result).toBe('dead');
});
