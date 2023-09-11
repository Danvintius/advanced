export function orderByProps(obj, arr) {
    for (key in obj) {
        return key;
    }
}

export function showAttackDescription(obj) {
  let spec = obj.special;
  let result = [];
  for (let i = 0; i < spec.length; i++) {
      if (spec[i].description === undefined) {
        spec[i].description = 'Описание недоступно';
      }
    result.push(spec[i]);
  }
  return result;
}