export function validateEmail(mail) {
  let ab = /([a-zA-Z0-9])+@(successive)\.(tech)/g;
  
  if (ab.test(mail)) {
    return true;
    } 
    return false;
  }
  