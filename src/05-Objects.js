/**
* escribe una función que devuelve datos de un objeto.
* tenemos un objeto de "person":
* person = {
         firstname : "Jack",
         lastName : "Milton",
         age : 29
         }
* @param {person} object - un objeto.
* @returns {string} - Retorna una cadena en la forma de "First Name: Jack, Last Name: Milton, Age: 29".
*/
function getPersonInfo(person) {}


/**
* escribe una función que devuelve aumenta la edad de un objeto "person".
* tenemos un objeto de "person":
* person = {
         firstname : "Jack",
         lastName : "Milton",
         age : 29
         }
* @param {person} object - un objeto.
* @returns {number} - Retorna un numero de la edad de "person" + 1.
*/
function incrementAge(person) {}


/**
* escribe una función que añade una propiedad "isStudent" al objeto.
* tenemos un objeto de "person":
* person = {
         firstname : "Jack",
         lastName : "Milton",
         age : 29
         }
* @param {person} object - un objeto.
* @returns {object} - Retorna un objeto que tiene la propeidad "isStudent" = true.
*/
function addIsStudentProperty(person) {}


/**
* escribe una función que elimina la propiedad "age" del objeto.
* tenemos un objeto de "person":
* person = {
         firstname : "Jack",
         lastName : "Milton",
         age : 29
         }
* @param {person} object - un objeto.
* @returns {object} - Retorna un objeto que no tiene la propeidad "age".
*/
function deleteAgeProperty(person) {}


/**
* escribe una función que prueba que la propiedad "age" del objeto existe.
* tenemos un objeto de "person":
* person = {
         firstname : "Jack",
         lastName : "Milton",
         age : 29
         }
* @param {person} object - un objeto.
* @returns {boolean} - Retorna un boolean true si la propiedad "age" existe, y false si no.
*/
function hasAgeProperty(person) {}


/**
* escribe una función que mergea 2 objetos.
* @param {obj1} object - un objeto.
* @param {obj1} object - un objeto.
* @returns {boolean} - Retorna un boolean true si la propiedad "age" existe, y false si no.
*/
function mergeObjects(obj1, obj2) {}


/**
* escribe una función que devuelve datos de un objeto.
* tenemos un objeto de "person":
* book = {
         name : "Harry Potter",
         autor : {
             firstName : "J. K.",
             lastName : "Rowling"
         }
        }
* @param {book} object - un objeto.
* @returns {string} - Retorna una cadena en la forma de "J. K. Rowling".
*/
function getAuthorFullName(book) {}

export {getPersonInfo, incrementAge, addIsStudentProperty, deleteAgeProperty, hasAgeProperty, mergeObjects, getAuthorFullName}
