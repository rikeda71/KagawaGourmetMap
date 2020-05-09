export function objectSort(obj: Object) {
  const keys = Object.keys(obj).sort();
  const map = {};

  keys.forEach(function (key) {
    let val = obj[key];
    if (typeof val === "object") {
      val = objectSort(val);
    }
    map[key] = val;
  });

  return map;
}
