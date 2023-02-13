const itemData = {
  title: "chen test",
  description: "chen test description",
  status: "done",
};

export function generateItems(itemsAmount) {
  return [...Array(itemsAmount)].map((k, i) => ({ id: i, ...itemData }));
}

export function getItems(itemsAmount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const items = generateItems(itemsAmount);
      resolve(items);
    }, 1000);
  });
}
