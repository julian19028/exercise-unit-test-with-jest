test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)
    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;     
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Dollar should be 127.9 USD", function (){
    const{fromDollarToYen} = require('./app.js')
    const Yen = fromDollarToYen(10)
    const expected = 10 * 127.9;
    expect(fromDollarToYen(10)).toBe(1279)
})

test("One Yen", function(){
    const{fromYenToPound} = require('./app.js')
    const Pound = fromYenToPound(5)
    const expected = 5 * 0.8;
    expect (fromYenToPound(5)).toBe(4)
})




