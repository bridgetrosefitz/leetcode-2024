const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 success"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 success"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 success"), 2000);
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("poo"), 500);
});

Promise.allSettled([p4])
  .then(res => console.log(res))
  .catch(err => console.error(err));
