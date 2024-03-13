export const getFormatedData = (data) => {
  const tree = [];

  // Map each item to its children
  const map = data.reduce((acc, item) => {
    acc[item.name] = { ...item, children: [] };
    return acc;
  }, {});

  // Connect each item to its parent
  data.forEach((item) => {
    if (item.parent !== "") {
      map[item.parent].children.push(map[item.name]);
    } else {
      tree.push(map[item.name]);
    }
  });

  return tree;
};
