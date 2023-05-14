// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const person = {
  firstName: "Abhishek",
  lastName: "Gurjar",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const name = person.fullName();
console.log(name);
console.log("this ", this);

// In HTML event handlers, this refers to the HTML element that received the event:
{
  /* <button onclick="this.style.display='none'">Click to Remove Me!</button>; */
}

// The example below calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1:
const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

// Return "John Doe":
console.log(person1.fullName.call(person2));

// Fuction Borrowing
// With the bind() method, an object can borrow a method from another object.
// This example creates 2 objects (person and member).
// The member object borrows the fullname method from the person object:

const person10 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName10 = person10.fullName.bind(member);
console.log("FullName", fullName10());
