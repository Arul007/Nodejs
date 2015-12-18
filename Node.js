var doSomething =function(paramOne){
    alert(paramOne);
    var chumma="Hai chumma how are you";
    var local=function hello(hai){
      alert(chumma);
    };
    local();
};
doSomething(10);
