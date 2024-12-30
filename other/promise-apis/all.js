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

const test = async () => {
  const res = await Promise.all([p1, p2, p3]);

  console.log("res", res); // ['P1 success', 'P2 success', 'P3 success'] (After 3 seconds)

  return res;
};

const testRes = test();

console.log("testRes", testRes); // promise, with resolved result inside

const testFail = async () => {
  try {
    const res = await Promise.all([p1, p2, p3, p4]);
    console.log("res testFail try", res);
    return res;
  } catch (error) {
    console.error("res testFail catch", error);
  }
};

testFail();
