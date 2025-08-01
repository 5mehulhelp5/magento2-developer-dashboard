# Notes

## Testing with Vitest
- `describe` groups tests within a test suite
- `it` is used to define individual test cases
- `expect` function is used to assert conditions in the tests.

```javascript
import { describe, it, expect } from 'vitest';

describe("add function", () => {
    it("should return the sum of two numbers", () => {
        const add = (a, b) => a + b;
        expect(add(1, 2)).toBe(3);
    });
    
    it("should return a negative number when adding a positive number and a larger negative number", () => {
        const add = (a, b) => a + b;
        expect(add(1, -2)).toBe(-1);
    });
    
    it("should return zero when adding any number and its negative", () => {
        const add = (a, b) => a + b;
        expect(add(5, -5)).toBe(0);
        expect(add(-5, 5)).toBe(0);
    });
});
```

### Test Filtering
- `.only` can be used to run single test or group of tests within a file.
- `.skip` can be used to skip specific tests.

### Sources
https://betterstack.com/community/guides/testing/vitest-explained/