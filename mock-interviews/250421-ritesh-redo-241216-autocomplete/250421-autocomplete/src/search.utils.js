const getRandomString = () => Math.random().toString(36).substring(2, 15);

const getRandomNumberLessThan = max => Math.floor(Math.random() * max);

export const makeServerCall = searchText => {
  if (searchText === "") {
    return Promise.resolve({});
  }

  let results = [];

  for (let i = 0; i < 2 + getRandomNumberLessThan(5); i++) {
    results.push(`${searchText} - ${getRandomString()}`);
  }

  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({ results, searchText });
      } else {
        reject("Internal server error");
      }
    }, 1000 * Math.random());
  });
};
