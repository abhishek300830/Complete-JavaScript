// Variables declared inside a { } block can be accessed from outside the block:if it is var
// Variables declared inside a { } block cannot be accessed from outside the block:if it is let

{
  var x = 2;
}
// x CAN be used here

{
  let x = 2;
}
// x can NOT be used here

// Global Variable

let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}

// Strict Mode

// In "Strict Mode", undeclared variables are not automatically global.
