"use strict";

// let person = {
//  Vornamen: "Luca",
//  Nachname: "Maranta",
// }
// // lesend
// console.log(person.Vornamen + " "+ person.Nachname);

// person.Vornamen = "Giona";
// console.log(person.Vornamen + " " + person.Nachname);

let person1 = {
 Vorname: "",
 Nachname: "",
 Hobbies: [],
 getName: function(){
  return this.Vorname + " "+ this.Nachname;
 },
 getHobbies: function (){
  return this.Hobbies.join(" <=> ");//array Verknüpfer
 },
 setFirstName: function(name){
  this.Vorname = name;
 },
 setLastName: function(name){
  this.Nachname=name;
 },
 setHobbies:  function(hobby){
  this.Hobbies.push(hobby);
 },

};

console.log(person1.Vorname, person1.Nachname,person1.getName());

person1.setFirstName("Luca");
person1.setLastName("Maranta");
console.log(person1.getName());

person1.setHobbies("Segeln");
person1.setHobbies("Boxen");
person1.setHobbies("Fahrrad fahren!");
console.log(person1.getHobbies())

console.log(person1);

person1.xx="1. Eigenschaft hinzugefügt";
person1.yy = "2. Eigenschaft hinzugefügt";
console.log(person1);

class Mensch{
 constructor(vor, nach){
  this.Vorname = vor;
  this.Nachname = nach;
 }
}

let person = new Mensch("Giona", "Maria");
console.log(person.Vorname + " "+ person.Nachname );

class Addieren{
 constructor(a,b){
  this.a= a;
  this.b= b;
 }
 adieren(){ //methode wird eingefügt
  return this.a+this.b;//=Funktionskörper
 }
}
let addieren = new Addieren(12,15);
console.log(addieren.adieren());//durch die . Notation wird die Methode aufgerufen


function Mensch2(first,last){
 this.Vorname = first;
 this.Nachname = last;
}

Mensch2.prototype.gruessen = function(){
 return `${this.Vorname} sagt Hallo`
}

let person3 = new Mensch2 ("Luccano", "Grande");
console.log(person3.Vorname + " "+ person3.gruessen())

class MenschClass{
 constructor(first, last){
  this.Vorname = first;
  this.Nachname=last;
 }
 gruessen(){
  return `${this.Vorname} ${this.Nachname} sagt huhu`
 }
}
let person5 = new MenschClass("Jojo", "Sand");
console.log(person5.Vorname + " "+ person5.Nachname);
console.log(person5.gruessen())

class Addieren2{
 constructor(a,b){
  this.a = a;
  this.b=b;
 }
 set setzeA(zahl){
  this.a = zahl;
 }
 set setzeB(zahl){
  this.b = zahl;
 }
 get result(){
  return this.a + this.b;
 }
}

let aufgabe = new Addieren2(2,5);
console.log(aufgabe.result);
aufgabe.setzeA= 33;
aufgabe.setzeB= 8;
console.log(aufgabe.result);

// Übergabe mmit einem Array

class Adieren6{
 constructor(a){
  this.a= a[2];
  this.b=a[1];

 }
 set setze(zahl){
  this.a=zahl[0];
  this.b=zahl[2];
 }
 get result(){
  return this.a + this.b;
  }
}

let aufgabe1 = new Adieren6([8,5,10]);
console.log(aufgabe1.result);
aufgabe1.setze=[15,16,14];
console.log(aufgabe1.result)


// ANCHOR static Methode
class Vergleiche{
 constructor(zahl){
  this.zahl=zahl;
 }
 get getZahl(){
  return this.zahl;
 }
 static werIstGroesser(objektA,objektB){
  if(objektA.getZahl>objektB.getZahl)
  return objektA;
 else
 return objektB;
 }
}
let zahl1 = new  Vergleiche(222);
let zahl2 =  new Vergleiche(37);
console.log(Vergleiche.werIstGroesser(zahl1, zahl2).getZahl);


// ANCHOR INTERNE/private Methode
class Addieren3{
 constructor(a,b){
  this.a = a;
  this.b=b;
 }
 _addieren(){
  return this.a+this.b;
 }
 get getResult3(){//ruft Methode _addieren auf
  return this._addieren();
 }
}

let aufgabe4 = new Addieren3(11155,66);
console.log(aufgabe4.getResult3)

// ANCHOR Vererbung von Klassen

class Zahlen{
 constructor(a,b){
  this.a = a;
  this.b=b;

 }
   set setZahlen(zahlen){
    this.a =zahlen[0];
    this.b=zahlen[1];
   }
   get getZahlen(){
    return [this.a, this.b]
   }
}
class Addition extends Zahlen{//extends erbt zahlen 
 _berechneAddition(){
  return this.a + this.b;
 }
 get getResult2(){
  return this._berechneAddition();
 }
}
class Subtraktion extends Zahlen{
 _berechneSubtraktion(){
  return this.a - this.b;
 }
 get getResult(){
  return this._berechneSubtraktion();
 }
}

let aufgabe7 = new Addition(50,50);
console.log(aufgabe7.getResult2);
console.log(aufgabe7.getZahlen);

let aufgabe8 = new Subtraktion(80,90,30);
console.log(aufgabe8.getResult);
console.log(aufgabe8.getZahlen);


// ANCHOR super

class GroesenVergleich{
 constructor(zahl){
  this.a = zahl[0];
  this.b = zahl[1];
 }
 _check(){
  if (this.a > this.b){
   return "a ist größer als b";

  }else{
   return"a ist kleiner als b";
  }
 }
}
class Zahlen3 extends GroesenVergleich{
 _check(){
  if (this.a%2 == 0){
   return "a ist durch 2 teilbar";
  }else{
   return "a ist nicht durch 2 teilbar";
  }
 }
 get getVergleich(){
  return [super._check(), this._check()]
 }
}
var test = new Zahlen3([24,14]);
console.log(test.getVergleich)

// ANCHOR Vererbung komplett mit Funktionen

function Namen(first,last){
 this.Vorname=first;
 this.Nachname=last;
}

// neuer constructor wird erstellt
function Magic(first,last, age){
 Namen.call(this, first ,last);
 this.age = age;
}

// Methode der Klasse hinzufügen
Magic.prototype.gruessen= function(){
 return `${this.Vorname} ${this.Nachname} sagt Hallo`;
}

person = new Magic("Luca", "Maranta", 49);
console.log(person.gruessen());
console.log(person.Vorname + " ist "+ person.age + "jahre alt");







