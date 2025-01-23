# suspicious-email-detect

A lightweight package to detect suspicious email addresses based on known spam domains.

## Installation

```bash
npm install suspicious-email-detect
```

## Usage

```javascript
// ESM
import { isSuspicious } from "suspicious-email-detect";

// CommonJS
const { isSuspicious } = require("suspicious-email-detect");

// Check if an email is suspicious
const email = "test@example.com";
if (isSuspicious(email)) {
  console.log("This email looks suspicious!");
} else {
  console.log("This email looks fine.");
}
```

## API

### isSuspicious(email: string): boolean

Checks if an email address is suspicious based on its domain.

- `email`: The email address to check
- Returns: `true` if the email is suspicious, `false` otherwise

## How it works

This package uses a list of known spam domains and checks if the domain of the email address is in the list. If you find a new spam domain that is not in the list, please create a pull request to add it.

## License

MIT
