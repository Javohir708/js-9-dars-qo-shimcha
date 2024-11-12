// 1-masala
{
    // function decloration
    function greeting (ism) {
        console.log(`Assalomu alaykum ${ism}`)
    }

    greeting('Javohir')
}

{
    // function expression 
    const greetingExpression = function (ism) {
        console.log(`Assalomu alaykum ${ism}`)
    }

    greetingExpression('Javohir')
}

{
    // arrow function
    const greetingArrow = (ism) => {
        console.log(`Assalomu alaykum ${ism}`)
    }

    greetingArrow(`Javohir`)
}


// 2-masala 
{
    // function decloration
    function reset (a, b) {
        let array = []
        if (a < b) {
            for (let i = a; i <= b; i++)
                array.push(i)
        } else {
            console.log(`a soni b dan kichik bo'lishi kerak`);
        }
        return array
    }
    console.log(reset(3, 8))
}

{
    // function expression
    const reset = function (a, b) {
        let array = []
        if (a < b) {
            for (let i = a; i <= b; i++)
                array.push(i)
        } else {
            console.log(`a soni b dan kichik bo'lishi kerak`);
        }
        return array
    }
    console.log(reset(3, 8))
}

{
    // arrow function
    const reset = (a, b) => {
        let array = []
        if (a < b) {
            for (let i = a; i <= b; i++)
                array.push(i)
        } else {
            console.log(`a soni b dan kichik bo'lishi kerak`);
        }
        return array
    }
    console.log(reset(3, 8))
}


// 3-masala 
{
    // function decloration
    function boolean (n) {
        if (n) {
            return 1;
        } else {
            return 0
        }
    }

    console.log(boolean(true))
    console.log(boolean(false))
}

{
    // function expression
    const boolean = function (n) {
        if (n) {
            return 1;
        } else {
            return 0
        }
    }

    console.log(boolean(true))
    console.log(boolean(false))
}

{
    // arrow function
    const boolean = (n) => {
        if (n) {
            return 1;
        } else {
            return 0
        }
    }

    console.log(boolean(true))
    console.log(boolean(false))
}


// 4-masala 
{
    // function decloration
    function name (ism) {
        console.log(ism)
    }

    name('Javohir'.charAt(0))
}

{
    // function expression
    const name = function (ism) {
        console.log(ism)
    }

    name('Javohir'.charAt(0))
}

{
    // arrow function
    const name = (ism) => {
        console.log(ism)
    }

    name('Javohir'.charAt(0))
}


// 5-masala 
{
    // function decloration
    function yigindi (...rest) {
        let natija = 0;
    for ( let i = 0; i < rest.length; i++) {
        natija += rest[i]
    }
    return natija
    }

    console.log(yigindi(10, 20, 30, 10));
}

{
    // function expression
    const yigindi = function (...rest) {
        let natija = 0;
    for ( let i = 0; i < rest.length; i++) {
        natija += rest[i]
    }
    return natija
    }

    console.log(yigindi(10, 20, 30, 10));
}

{
    // arrow function 
    const yigindi = (...rest) => {
        let natija = 0;
    for ( let i = 0; i < rest.length; i++) {
        natija += rest[i]
    }
    return natija
    }

    console.log(yigindi(10, 20, 30, 10));
}