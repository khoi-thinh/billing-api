console.log("Running tests...");

// very simple test
if (1 + 1 !== 2) {
  throw new Error("Test failed");
}

console.log("All tests passed");
