export function validateEmail(mail: string): boolean {
  const ab = /([a-zA-Z0-9])+@(successive)\.(tech)/g;

  if (ab.test(mail)) {
    return true;
  }
  return false;
}
