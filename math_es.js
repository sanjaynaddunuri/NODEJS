export default function add(a, b) {
  //default export
  return a + b;

}
export function sub(a, b) {
  //named export
  return a - b;
}


//1.variables cannot have multiple default exports
//2.variables cant be exported using default exports
