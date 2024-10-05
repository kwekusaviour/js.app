/*console.log("hello world i love you") 
console.log("my name is saviour")


        //javascript deals with behaviour
        //while html deals with contents
        //comment. my first javascript lesson
        console.log("Hello World");
        console.log("My name is Saviour")

        var name = 'Nike';
        console.log(name);

        // variables cannot be a reserved keyword
        // should be meaningful
        // camnnot start with a number (1name)
        // cannot contain a space or hyphen (-)
        // should start with a cannon notation (firstName)
        // are case-sensitive
        
        //let firstName; //correct
        //let FirstName //wrong
        
        // 2 Categories of TYPES
        // premitives/value types and Reference type
        // Premitives/Value types which are
        //strings
        //numbers
        // boolean
        //undefined
        // null
        //Eg.
        let name = 'Jude'; //string literal
        let age = 30; // number literal
        let isApproved = true; // boolean literal eg. true or false
        let firstName = undefined;
        let selectedColor = null;

        // Reference types of
        // object
        // array
        // function

        // Javascrip is a dynamic language 
        //meaning that the type of variable can change with time unlike static type of languages
        //*/

        let person = {
            name: 'Leo',
            age: 40
        };

        // Two ways to access a propperty
        // Dot notation e.g
        person.name = 'Joe';

        // Bracket notation e.g
        person['name'] = 'Mary'
        console.log(person);

        // Arrays
        // arrays is a data structure that we use to represent a list of items.
        // arrays are majorly an object
        // and are dynamic i.e can change at anytime by the developer or user
        let selectedColor = ['red', 'green'];
        selectedColor[2] = 'blue'
        console.log(selectedColor);

        // to change the index of an element property
        // you call the index number of that propperty
        let selectedColor = ['red', 'green'];
        selectedColor[2] = 'blue'
        console.log(selectedColor[0]);

        // to check the length of an element in arrays i.e
        let selectedColor = ['red', 'green'];
        selectedColor[2] = 'blue'
        console.log(selectedColor.length);

        // Functions
        //its a set of statements that peforms a task or calculates a value eg.
        // functions can have multiple parameters.
        // (Read)...difference of peremiters and agguements 

       // e.g 1//
        function greet() {
            console.log('hello world')
        }

        greet()

        // e.g 2
        function greet(name) {
            console.log('Hello ' + name);
        }

        greet('Ruby');
        greet('jude');
        greet('paco');

        // we can separate a parameter with a comma to add another peremiter
        // a function can have multiple peremiters
        // eg. 3
        function greet(name, lastName) {
            console.log('Hello ' + name + '' + lastName);
        }

        greet('Ruby', 'Smith');
        greet('jude', 'math');

        // Types of Functions.
        // eg. 1 performing a task
        function greet(name, lastName) {
            console.log('Hello ' + name + '' + lastName);
        }

       greet('Ruby', 'Smith');

       //function that Calculates a value
       function square(number) {
        return number * number;
    }

    let number = square(2);
    console.log(number);

    // also we can exercute without displaying all variables
    //eg.
    function square(number) {
        return number * number;
    }
    
    console.log( square(2));








