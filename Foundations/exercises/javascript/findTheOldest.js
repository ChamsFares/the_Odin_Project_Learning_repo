const getAge = function (person) {
    person.yearOfDeath ??= new Date().getFullYear();
  
    return person.yearOfDeath - person.yearOfBirth;
};
  
const findTheOldest = function (people) {
    const peopleOldestToYoungest = people.toSorted(
    (person, nextPerson) => getAge(nextPerson) - getAge(person),
    );
  
    const oldestPerson = peopleOldestToYoungest[0];
    return oldestPerson;
  };
module.exports = findTheOldest;