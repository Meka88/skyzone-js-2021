  // Data types----------

  // ARRAYS---------
  //1. way of creating an array
  //var days = new Array();
  //2. way of creating an array
  // var days = [];

  //arrays of strings
  var days4 = ['Monday', 'Tuesday', 'Sunday'];
  
  //arrays of numbers
  var years = [2020, 2021];

  //array of mixed data types
  var mixed = ['Monday', 2020, 'Sunday', 2021, true, false];

  //arrays lenght
  console.log('Lenght of days array:', days4.length);
  console.log('Lenght of years array:', years.length);
  console.log('Lenght of mixed array:', mixed.length);
  
  //index vs lenght
  //['Monday', 'Tuesday', 'Sunday']
  //index 0=Monday, 1=tuesday, 3=Sunday;
  //lenght 1=Monday, 2=Tuesday, 3=Sunday;

  //Bracket Notation
  console.log(mixed[0]); //true
  console.log(mixed[4]); //false

  console.log('-----------');
  //loops and array
  for (var i = 0; i <= mixed.length; i++) {
    console.log(mixed[i]); //0, 1, 2, 3
  }

  var arr = [];
  arr[0] = 1;
  arr[8] = 8;

  console.log(arr); //[1, 8]
  console.log(arr[2]); //undefined
  console.log(arr[10]); //undefined

  // update a value
  arr[0] = 0;
  console.log(arr);

  // built-in
  //push
  var arr2 = [];
  arr2.push('Happy Wednesday');
  arr2.push('Happy Thursday');
  arr2.push('Happy Friday');
  console.log('arr2', arr2);
  //pop
  arr2.pop(); //remove last element from array
  console.log('arr2', arr2);

  // ACTIVITY
  //array of fav bands
  var favoriteBands = ['Coldplay', 'Nickelback', 'Linkin Park'];
  //we have to ask user their fav band via promt
  //var userInput = prompt ('What is your favorite Band?');
  //add users band to my fav bands
  //favoriteBands[favoriteBands.length] = userInput;
  //favoriteBands.push(userInput);
  //console.log()
  for ( var i = 0; i < favoriteBands.length; i++) {
    //console.log('bands:', favoriteBands[i]);
  }

  // OBJECTS----------
  var person = {};
  //var pesron = new Object();
  //key-pair


  person.name = 'Ulan';
  person.occupation = 'doctor';
  person.gender = 'male';
  console.log(person);

  /* another way of putting it
  var person = {
    name: 'Ulan';
    occupation: 'doctor';
    gender: 'male';
  }*/
  var array0fObject = ['Text', 123, true, person]
  console.log('array0fObject', array0fObject);
  
  //Bracket Notation - objects

  console.log(person['name']);
  console.log(person['occupation']);
  console.log(person['gender']);

  //Dot Notation 
  console.log(person.name);
  console.log(person.occupation);
  console.log(person.gender);

   // add object props

   person.weigth = 125;
   console.log(person);

   // update object props
   person.name = 'Rick';
   console.log(person);

   //delete object props
   delete person.occupation;
   console.log(person);

   // ARRAY of Objects
    var gandalf = {
      name: 'Gandalf',
      gender: 'male',
      age: 43,

    }

   var arrayOfObject = ['Text', 123, true, gandalf]
   //index
   console.log(array0fObject[3].name);

   //pop
   //var gandalf2 = array0fObject.pop(); //it takes last element
   //console.log(gandalf2.name);


   // loop - we assume there is only one object in array
   for(var i=0; i<array0fObject.length; i++){
     if (array0fObject[i] === 'gandalf'){
       console.log(array0fObject[i].name);
     }
     //console.log(typeof array0fObject(i));
   }
    
   // ACTIVITY
   var user = {
    name: 'John',
    lastName: 'Doe',
  } 
  console.log(person);
   
  user.name = 'Chris';
  console.log(user);

  delete person.lastName;
  console.log(user);
  
  user.interests = ['reading', 'singing', 'rugby'];
  console.log('user.interests', user.interests);

  //looping through array inside an object 
  //console.log('length', user.length);
  for (let i = 0; i < user.interests.length; i ++) {
  console.log(user.interests[i]);}
   // exercise 1
  var recipe = {
    title: 'Pasta',
    servings: 2,
    ingredients: ['cheese', 'rotini', 'tomatoes']
}
  console.log(recipe.title);
  console.log('Serves: ', recipe.servings);
  console.log('Ingredients: ', recipe.ingredients);
  for (var i = 0; i < recipe.ingredients.length; i=i+1) {
    console.log(recipe.ingredients[i]);
  }
  
  //exercise 2

  var arrayOfBooks = [
    {'title': 'Pride and Prejudice',
    'author': 'Jane Austin',
    'alredyRead': true 
  },
  {
    'title': 'Jane Eyre',
    'author': 'Charlotte Bronte',
    'alreadyRead': false
  }
  ]
  for (var i=0; i < arrayOfBooks.length; i++) {
  console.log(arrayOfBooks[i].title + ' by ' + arrayOfBooks[i].author);
    if(arrayOfBooks[i].alreadyRead === true) {
      console.log('You read this book')
    } else {
      console.log('You need to read it');
    }
  }