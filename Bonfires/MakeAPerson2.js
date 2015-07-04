var Person = function(firstAndLast) {
  var First = firstAndLast.replace(/\s\w{1,}/,'');
  var Last = firstAndLast.replace(/\w{1,}\s/,'');
  var FullName = First + ' ' + Last;

  this.getFirstName = function(){
    return First;
  };

  this.getLastName = function(){
    return Last;
  };

  this.getFullName = function(){
    return First + ' ' + Last;
  };

  this.setFirstName = function(first){
    First = first;
  };

  this.setLastName = function(last){
    Last = last;
  };

  this.setFullName = function(firstAndLast){
    FullName = firstAndLast;
    First = FullName.split(' ')[0];
    Last = FullName.replace(/\w{1,}\s/,'');
  };

};

var bob = new Person('Bob Ross');
bob.setFullName('George Clin');
bob.setFirstName('Hank');
bob.getFullName();
