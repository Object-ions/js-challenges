/*
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}
*/

function validateEmail(email) {
  //  user@domain.com
  if (!email.includes('@')) {
    return false;
  }

  const [user, domain] = email.split('@');

  //  user@domain.com
  if (user.length === 0 || domain.length < 3) {
    return false;
  }

  const domainEx = domain.split('.');
  if (domainEx.length < 2) {
    return false;
  }

  return true;
}

module.exports = validateEmail;
