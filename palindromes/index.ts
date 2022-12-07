export function palindrome(str: string) {
  let acum = "";
  for (const character of str) {
    acum = character + acum;
  }
  return str === acum;
}
