/**
 * Detect if browser suports web storage
 */

 if (window.localStorage) {
    // Browser supports localStorage
    // Good to go
  } else {
    // No localStorage support
  }
  
  /**
   * HTML5 WEB STORAGE METHODS
   */
  
  // setItem()
  localStorage.setItem('name', 'Ulan'); // key : value
  
  // getItem()
  localStorage.getItem('name');
  
  // removeItem()
  localStorage.removeItem('name');
  
  // clear()
  localStorage.clear();
  
  // length
  localStorage.length;
  
  /**
   * STRINGS
   */
  
  // With web storage, data can only be stored as string values. This means that when you have an object as data, it will not be stored the right way. Take for example the code below:
  var person = {
    Name: 'John Doe',
    Age: 24,
    Gender: 'Male',
    Nationality: 'Nigerian',
  };
  localStorage.setItem('person', person);
  localStorage.getItem('person'); // [object Object]
  
  // This problem can be solved by using the native JSON.stringify() and JSON.parse() methods:
  localStorage.setItem('person', JSON.stringify(person));
  JSON.parse(localStorage.getItem('person'));