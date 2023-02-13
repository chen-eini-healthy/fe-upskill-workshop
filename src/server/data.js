const itemData = {
  title: "Task",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  status: "done",
};

export function generateItems(itemsAmount) {
  return [...Array(itemsAmount)].map((k, i) => ({ id: i, ...itemData }));
}

export function getItems(itemsAmount) {
  return new Promise((resolve, reject) => {
    const items = generateItems(itemsAmount);
    resolve(items);
  });
}
