let myData = {
    name: 'Aynur',
    gender: 'female',
    age: 29,
    retirementAge: 65,
    setAge: function (newAge) {
        this.age = newAge;
        console.log(newAge);
    },
    getYearsBeforeRetirement: function () {
        const yearsLeft = this.retirementAge - this.age;
        console.log(yearsLeft);
    },
}
myData.setAge();
myData.getYearsBeforeRetirement();
