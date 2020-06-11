class Person
{
  constructor(name='Nguyen Duc Tuan',age = 22)
  {
      this.name = name;
      this.age = age;
  }
getName()
{
    // return 'Full name is'  +this.name + 'Age is' + this.age;
    return `Full name is ${this.name} and age is ${this.age}`;
}
}
class Student extends Person
{
  constructor(name, age, major)
  {
    super(name, age);
    this.major = major;
  }
  getMajor()
  {
    return !!this.major;
  }
  getName()
  {
     let background = super.getName();
     if(this.getMajor())
     {
      background +=  `Major is ${this.major} `;
     }
     return background;
  }
}

class Travel extends Person
{
  constructor (name, age, location)
  {
    super(name, age);
    this.location = location;
  }
getName(){
 let baby = super.getName();
 if(this.location)
 {
   baby += `Location is ${this.location}`;
 }
 return baby;
}
}

const baby = new Person('Tuan',19);
console.log(baby.getName());
const mother = new Person();
console.log(mother.getName());
const father = new Student('Tuấn',22,'Infomation System Engineer');
console.log(father.getName());
const sister = new Travel('Tuấn',22,'TP.HCM');
console.log(sister.getName());