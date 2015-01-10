/**
 * Implementation of class Animal and his subclass Dog
 * for WebbyLab
 *
 * @Warning Code with limited liability
 * @author Pavlo Shenhofer
 * @version 1.0
 * @since   10-01-2015
 */

//Class Animal
function Animal(name){
    if( (typeof name) == 'string' || name instanceof String){
        this.name = name;
    }
    else{
        this.name = undefined;
        //throw "Animal name must be String"
    }
}
Animal.prototype.getName = function(){
    return this.name;
}
// Class Dog
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
function Dog(name){
    if( (typeof name) == 'string' || name instanceof String){
        this.name = name;
    }
    else{
        this.name = undefined;
        //throw "Dog name must be String"
    }
}
Dog.prototype.gav = function(){
    return 'Dog ' + this.name + ' is saying gav';
}


//Test function for getName method of class Dog
function getNameTest(dogName,expected){
    var dog = new Dog (dogName);
    results.total++;
    var result = dog.getName();
    if (result !== expected) {
        results.bad++;
        console.log("Expected " + expected + ", but was " + result);
    }
}
//Test function for gav method of class Dog
function gavTest(dogName,expected){
    var dog = new Dog (dogName);
    results.total++;
    var result = dog.gav();
    if (result !== expected) {
        results.bad++;
        console.log("Expected " + expected + ", but was " + result);
    }
}
var results = {
    total: 0,
    bad: 0
};

getNameTest('Aban','Aban');
getNameTest('','');
getNameTest(undefined,undefined);
getNameTest('Garfield','Garfield');
getNameTest(23, undefined);
getNameTest(results,undefined);

gavTest('Aban','Dog Aban is saying gav' );
gavTest(undefined,'Dog undefined is saying gav');
gavTest('','Dog  is saying gav');
gavTest('23','Dog 23 is saying gav');
gavTest(23,'Dog undefined is saying gav');

console.log("Of " + results.total + " tests, " + results.bad + " failed, "
+ (results.total - results.bad) + " passed.");

