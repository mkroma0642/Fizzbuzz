(function fizzBuzz(iter){
    var str = '';


    if(!(iter % 3)) str += 'Fizz'
    if(!(iter % 5)) str += 'Buzz'


    console.log(str || iter)


    if(iter >= 100) return


    fizzBuzz(++iter)
})(1)