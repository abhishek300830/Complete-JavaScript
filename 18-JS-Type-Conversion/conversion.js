Number("3.14");
Number(Math.PI);

// converting Number to String
String(x); // returns a string from a number variable x
String(123); // returns a string from a number literal 123
String(100 + 23); // returns a string from a number from an expression

// converting dates to Num
d = new Date();
Number(d); // returns 1404568027739

// or
d = new Date();
d.getTime(); // returns 1404568027739

// automatic type conversions
5 + null; // returns 5         because null is converted to 0
"5" + null; // returns "5null"   because null is converted to "null"
"5" + 2; // returns "52"      because 2 is converted to "2"
"5" - 2; // returns 3         because "5" is converted to 5
"5" * "2"; // returns 10        because "5" and "2" are converted to 5 and 2
