//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
  console.log("Hello");
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
console.log("hello2");

const hello = () => {
  console.log("hello3");
};

hello();
