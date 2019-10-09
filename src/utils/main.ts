const filterOwnProperty = (obj: any): any => {
  const res = {} as any;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = obj[key];
    }
  }
  return res;
};

export const isObjectsSimilar = (object1: any, object2: any): boolean => {
  const first = JSON.stringify(filterOwnProperty(object1));
  const second = JSON.stringify(filterOwnProperty(object2));
  return first === second;
};
