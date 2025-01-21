import { isSuspicious } from "./index.js";

function runTests() {
  const tests = [
    { email: "spam@skiff.com", expected: true },
    { email: "user@gmail.com", expected: false },
  ];

  tests.forEach(({ email, expected }, index) => {
    const result = isSuspicious(email);
    console.log(
      `Test ${index + 1}: ${email} - Expected: ${expected}, Got: ${result}`
    );
    console.assert(result === expected, `Test ${index + 1} failed`);
  });
}

runTests();
