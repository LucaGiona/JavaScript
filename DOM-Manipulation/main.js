
 'use strict';
 function getURL(){
  document.querySelector('#ausgabenID').value = document.URL;
    }
 function getFileName(){
  let path = document.URL;
 let page = path.split("/").pop();
 document.querySelector('#ausgabenID').value = page;
    }

 function getDomain(){
  document.querySelector('#ausgabenID').value = document.domain;
    }

 function getImageInfo(){
  document.querySelector('#ausgabenID').value =
  'Pfad vom Quietsche-Entchen: ' + document.images[0].src
  + '================> Anzahl Bilder: ' + document.images.length;
    }

 function getLinks(){
  document.querySelector('#ausgabenID').value = "Anzahl Links: "
  + document.links.length
  + '; Link 1: ' + document.links.item(0)
  + '; Link 2: ' + document.links.item(1);
 console.log(document.links.item(0));
 console.log(document.links.item(1));
 console.log(document.links[0]);
 console.log(document.links[1]);
    }

 let slider = document.getElementById("myRange");
 let output = document.getElementById("ausgabenID");
 output.value = slider.value;

 slider.oninput = function() {
  output.value = this.value;
    }


 function getName(){
  let output = document.getElementById("output"); //= document.getElementsByName("fname")[0].value;
 output.innerText = document.getElementsByName("fname")[0].value + ' '
 + document.getElementsByName("lname")[0].value;
    }

 document.querySelector('#checkboxId').addEventListener('click',setTrue);
 function setTrue(){

  let val = document.getElementsByName("Lecker");
 val.forEach(function (item, index, arr){
  arr[index].checked = true;
        });
    }

 document.querySelector('#checkboxId2').addEventListener('click',setFalse);
 function setFalse(){
  let val = document.getElementsByName("Lecker");
 val.forEach(function (item, index, arr){
  arr[index].checked = false;
        });
    }

 document.querySelector('#getClassId').addEventListener('click', getClass);
 function getClass(){
  let elem = document.getElementsByClassName('divClass');
 let ausgabe = 'Anzahl: ' + elem.length + '<br />In den div\'s steht folgender Text:<ul>';
  for(let i = 0; i<elem.length; i++) {
   ausgabe += '<li>' + elem[i].innerHTML + '</li>';
        }
  document.querySelector('.divClass').innerHTML = ausgabe + '</ul>';
    }

 document.querySelector('#attributeId').addEventListener('click', getAttr);
 function getAttr(){
        const div = document.getElementById('divId');
 let ausgabe = 'datenAttribut: ' + div.getAttribute('datenAttribut') + '<br />';
 ausgabe += 'attr: ' + div.getAttribute('attr') + '<br />';
 ausgabe += 'grmpf: ' + div.getAttribute('grmpf') + '<br />';

 document.querySelector('#divId').innerHTML = ausgabe;
    }

 document.querySelector('#cmdImgId').addEventListener('click', moveImage);

 let interval = null;
 let pos_x = 10;
 let pos_y = 250;
 function moveImage(){
  let img = document.getElementById('entcheImgID');
 img.style.position = 'absolute';
 interval = setInterval(function(){
  move(img);
        }, 10);
    }

 function move(img){
  img.style.left = pos_x + 'px'; //222px
 img.style.top = pos_y + 'px';
 pos_x = pos_x + 1;
 pos_y = pos_y + 1;

        if(pos_x > 500){
  clearInterval(interval);
        }
    }

 function createText(){
  let p = document.createElement('p');
 p.style = "font-size: 48px;"
 p.appendChild(document.createTextNode('Hallo, '));

 let span = document.createElement('span');
 span.style = "font-size:96px";
 span.appendChild(document.createTextNode('Welt'));

 let attention = document.createTextNode('!!!!');
 span.appendChild(attention);

 span.innerHTML = span.innerHTML  + " Wie geht es???";

 p.appendChild(span);

 document.getElementById('newElementsID').appendChild(p);
    }


 function newList(){
        const liste = document.getElementById("listDivId");

 const ul = document.createElement('ul');
 const li = document.createElement('li');
 li.textContent = "Hallo";
 const li1 = document.createElement('li');
 li1.textContent = "Welt";
 const li2 = document.createElement('li');
 li2.textContent = "Wie geht es Euch?";
 const li3 = document.createElement('li');
 li3.textContent = "Macht JavaScript noch Spaß?";

 ul.appendChild(li);
 ul.appendChild(li1);
 ul.appendChild(li2);
 ul.appendChild(li3);

 liste.appendChild(ul);
    }

 function newImage(){
  let img = document.createElement ("img"); // new Image()
 // let img = new Image();
 img.height = 150;
 img.title = 'neues Bild'
 img.src = "../../../_images/site/resize.png";
 const ID = Math.floor(Math.random() * (100000000 - 1)) + 1;;
 img.id = ID;

 let lineBreak = document.createElement('br');

 document.querySelector("#imageId").appendChild(img);
 document.getElementById(ID).after(lineBreak);
    }

 function createImg(){
  let elems = [
 '../../../_images/site/ei.png',
 '../../../_images/site/Smiley.png',
 '../../../_images/site/arrow_up.png',
 '../../../_images/site/quitsche_entchen.jpg',
 ];
 let fragment = document.createDocumentFragment();

 for (let i=0; i<elems.length; i++) {
  let newNode = document.createElement('img');
 newNode.setAttribute('src', elems[i]);
 fragment.appendChild(newNode);
        }

 document.querySelector('#targetID').appendChild(fragment);
    }


 function remove(ID){
  //identifizieren des Knotens
  let element = document.getElementById(ID);
 //Aufrufen des Elternknotens
 element.parentNode.removeChild(element)
    }

 function removeCSS(){
        const el = document.querySelector('#divCSSID');
 if (el.classList.contains("black")) {
  el.classList.remove("black");
        }
    }

 function addCSS(){
        const el = document.querySelector('#divCSSID');
 el.classList.add("red");
    }

 function removeAll(){
  document.querySelector('#divCSSID').className = '';
    }

 function addStyle(){
  document.querySelector('#divCSSID').style = 'font-size:46px; background-color: #0f0;color:red';
    }
