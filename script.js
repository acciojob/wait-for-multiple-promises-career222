//your JS code here. If required.
function createPromise() {
  return new Promise((resolve) => {
    const start = performance.now();

    // Random time between 1 and 3 seconds
    const delay = Math.floor(Math.random() * 3) + 1;

    setTimeout(() => {
      const end = performance.now();
      const timeTaken = (end - start) / 1000;

      resolve(timeTaken);
    }, delay * 1000);
  });
}

// Start all 3 promises
const startTime = performance.now();

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    const endTime = performance.now();

    // Total time taken by all promises
    const totalTime = (endTime - startTime) / 1000;

    const output = document.getElementById("output");

    // Remove Loading...
    output.innerHTML = "";

    // Promise 1
    output.innerHTML += `
      <tr>
        <td>Promise 1</td>
        <td>${results[0].toFixed(3)}</td>
      </tr>
    `;

    // Promise 2
    output.innerHTML += `
      <tr>
        <td>Promise 2</td>
        <td>${results[1].toFixed(3)}</td>
      </tr>
    `;

    // Promise 3
    output.innerHTML += `
      <tr>
        <td>Promise 3</td>
        <td>${results[2].toFixed(3)}</td>
      </tr>
    `;

    // Total
    output.innerHTML += `
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>${totalTime.toFixed(3)}</strong></td>
      </tr>
    `;
  });