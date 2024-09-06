// Function component 'Homepage' (first letter capitalized as a convention)
function Homepage() {

  // Variable 'myName' is a string with the value "Ayesha"
  let myName: string = "Ayesha";

  // The component must return JSX (HTML-like code)
  return (
    <h1>Hello {myName}</h1>  // 'myName' is dynamically rendered inside the JSX
  );
}

// 'export default' is required to use this component in other files
export default Homepage;
