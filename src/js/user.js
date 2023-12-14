export default function healthStatus(hero) {
  let status;
  switch (true) {
    case hero.health >= 50:
      status = 'healthy';
      break;
    case hero.health < 50 && hero.health >= 15:
      status = 'wounded';
      break;
    case hero.health < 15 && hero.health > 0:
      status = 'critical';
      break;
    default:
      status = 'dead';
      break;
  }
  return status;
}
