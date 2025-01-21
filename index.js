import spamDomains from "./spam-domains.js";

/**
 * Checks if an email address is suspicious based on its domain
 * @param {string} email - The email address to check
 * @returns {boolean} - Returns true if the email is suspicious, false otherwise
 */
function isSuspicious(email) {
  if (!email || typeof email !== "string") {
    return false;
  }

  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) {
    return false;
  }

  return !!spamDomains[domain];
}

export { isSuspicious };
