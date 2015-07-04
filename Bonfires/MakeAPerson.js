var Person = function(firstAndLast) {
  var arr = firstAndLast.split(' ');
  this.first = arr[0];
  this.last = arr[1];
  this.firstLast = arr[0] + ' ' + arr[1];
  this.getFirstName = function(){return this.first;};
  this.getLastName  = function(){return this.last;};
  this.getFullName  = function(){return this.firstLast;};
  
};

Person.prototype.setFirstName = function(fname){this.first = fname;};
Person.prototype.setLastName = function(lname){this.last = lname;};
Person.prototype.setFullName = function(fullname){this.firstLast = fullname;};

                                     
var bob = new Person('Bob Ross');
bob.getFullName();
