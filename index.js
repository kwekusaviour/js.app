
        /*console.log("Hello World");
        console.log("My name is Saviour")

        var name = 'Nike';
        console.log(name);

        let Name = 'Pako';
        console.log(Name);

        let firstName = 'Joel';
        let lastName = 'Mesh';
        console.log(firstName, lastName);

        let interestRate = 0.5;
        interestRate = 3;
        console.log(interestRate);*/

        let person = {
            name: 'Leo',
            age: 40
        };

        person.name = 'Joe' //OR

         person['name'] = 'Mary'
        /*console.log(person);

        console.log(person.name);*/

        let selectedColor = ['red', 'green'];
        selectedColor[2] = 'blue'
        /*  console.log(selectedColor);*/
        /*console.log(selectedColor.length);*/

        function greet() {
            console.log('Hello World')
        }

        /*greet()*/

        function greet(name) {
            console.log('Hello ' + name);
        }

        /*greet('Ruby');
        greet('Jude');
        greet('Paco');*/

        function greet(name, lastName) {
            console.log('Hello ' + name + ' ' + lastName);
        }

        /*greet('Ruby', 'Smith');
        greet('jude', 'math');*/

        function square(number) {
            return number * number;
        }
    
        let number = square(2);
        /*console.log(number);*/

        function square(number) {
            return number * number;
        }
        
        console.log( square(2));