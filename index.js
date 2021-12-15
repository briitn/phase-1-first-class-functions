function spy(){return 'pop'}
//function receivesAFunction(){Spy()}
console.log(receivesAFunction(spy))

  function receivesAFunction(spy) {return spy()}
  
  function returnsANamedFunction(){return function named(){return 'op'}}
  function returnsAnAnonymousFunction(){return function(){return'ok'}}

  