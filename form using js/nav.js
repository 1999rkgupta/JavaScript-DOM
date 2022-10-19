var allElement = document.querySelectorAll("*");
for (var i = 0; i < allElement.length; i++) {
  var element = allElement[i];
  element.style.boxSizing = "border-box";
  element.style.margin = "0px";
  element.style.padding = "0px";
}

let section = document.createElement("section");
section.style.width = "100%";
section.style.height = "30%";
section.style.background = "#ccc";
document.body.appendChild(section);

let article = document.createElement("article");
article.style.height = "100%";
article.style.width = "90%";
article.style.margin = "0 auto";
article.style.display = "flex";
article.style.alignItems = "center";
section.appendChild(article);

let div1 = document.createElement("div");
div1.innerText = "LOGO";
div1.style.flexBasis = "30%";
div1.style.fontSize = "2em";
div1.style.color = "#bd7913";
div1.style.fontFamily = "bolder";
article.appendChild(div1);

let div2 = document.createElement("div");
div2.style.flexBasis = "70%";
article.appendChild(div2);

let ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.display = "flex";
ul.style.justifyContent = "space-around";
div2.appendChild(ul);

let li1 = document.createElement("li");
li1.innerText = "HOME";
li1.style.padding = "8px 16px";
li1.style.background = "#ffb84d";
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.innerText = "LOGIN";
li2.style.padding = "8px 16px";
li2.style.background = "#ffb84d";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.innerText = "REGISTER";
li3.style.padding = "8px 16px";
li3.style.background = "#ffb84d";
ul.appendChild(li3);

// Form
let mainForm = document.createElement("section");
mainForm.style.width = "70%";
mainForm.style.height = "140vh";
mainForm.style.marginTop = "30px";
mainForm.style.margin = "30px auto 0px";
mainForm.style.background = "#ffb84d";
document.body.appendChild(mainForm);

let head1 = document.createElement("h1");
head1.style.paddingTop = "10px";
head1.style.width = "98%";
head1.style.marginLeft = "1%";
head1.style.marginBottom = "40px";
head1.style.textAlign = "center";
head1.style.borderBottom = "1.5px solid gray";
head1.innerText = "Book A Room Form";
mainForm.appendChild(head1);

let form = document.createElement("form");
form.style.paddingLeft = "4%";
mainForm.appendChild(form);

let lab2 = document.createElement("label");
lab2.innerText = "First Name";
form.appendChild(lab2);

let lab3 = document.createElement("label");
lab3.innerText = "Last Name";
lab3.style.marginLeft = "40%";
form.appendChild(lab3);

let break3 = document.createElement("br");
form.appendChild(break3);

let inp1 = document.createElement("input");
inp1.style.width = "47%";
inp1.setAttribute("placeholder", "First name");
// inp1.style.marginLeft = "6px";
inp1.style.padding = "5px 0px";
form.appendChild(inp1);

let inp2 = document.createElement("input");
inp2.style.width = "47%";
inp2.setAttribute("placeholder", "Last name");
inp2.style.marginLeft = "6px";
inp2.style.padding = "5px 0px";
inp2.style.marginBottom = "20px";
form.appendChild(inp2);

let head5 = document.createElement("label");
head5.innerText = "Email";
form.appendChild(head5);

let break5 = document.createElement("br");
form.appendChild(break5);

let inp3 = document.createElement("input");
inp3.style.width = "95%";
inp3.setAttribute("type", "mail");
inp3.setAttribute("placeholder", "Enter Your Email");
inp3.style.padding = "5px 0px";
inp3.style.marginBottom = "20px";
form.appendChild(inp3);

let head6 = document.createElement("label");
head6.innerText = "Phone Number";
form.appendChild(head6);

let break6 = document.createElement("br");
form.appendChild(break6);

let inp4 = document.createElement("input");
inp4.style.width = "95%";
inp4.setAttribute("type", "number");
inp4.setAttribute("placeholder", "Enter Mobile Number");
inp4.style.marginBottom = "20px";
inp4.style.padding = "5px 0px";
form.appendChild(inp4);

let break1 = document.createElement("br");
form.appendChild(break1);

let head2 = document.createElement("label");
head2.innerText = "Date of Arrival";
form.appendChild(head2);

let inp5 = document.createElement("input");
inp5.style.width = "95%";
inp5.setAttribute("type", "date");
inp5.setAttribute("placeholder", "Select Booking date");
inp5.style.padding = "5px 0px";
inp5.style.marginBottom = "20px";
form.appendChild(inp5);

let break2 = document.createElement("br");
form.appendChild(break2);

let head3 = document.createElement("label");
head3.innerText = "Date of Departure";
form.appendChild(head3);

let inp6 = document.createElement("input");
inp6.style.width = "95%";
inp6.setAttribute("type", "date");
inp6.setAttribute("placeholder", "Select Booking date");
inp6.style.padding = "5px 0px";
inp6.style.marginBottom = "20px";
form.appendChild(inp6);

let label4 = document.createElement("label");
label4.innerText = "Room Type";
form.appendChild(label4);

let break7 = document.createElement("br");
form.appendChild(break7);

let radio1 = document.createElement("input");
radio1.setAttribute("type", "radio");
radio1.style.marginTop = "10px";
radio1.setAttribute("name", "room");
form.appendChild(radio1);

let label7 = document.createElement("label");
label7.innerText = "Single -$300 per day";
form.appendChild(label7);

let break8 = document.createElement("br");
form.appendChild(break8);

let radio2 = document.createElement("input");
radio2.setAttribute("name", "room");
radio2.setAttribute("type", "radio");
form.appendChild(radio2);

let label8 = document.createElement("label");
label8.innerText = "Deluxe -$500 per day";
form.appendChild(label8);

let break9 = document.createElement("br");
form.appendChild(break9);

let radio3 = document.createElement("input");
radio3.setAttribute("name", "room");
radio3.setAttribute("type", "radio");
form.appendChild(radio3);

let label9 = document.createElement("label");
label9.innerText = "Suite -$800 per day";
form.appendChild(label9);

let break10 = document.createElement("br");
form.appendChild(break10);

let radio4 = document.createElement("input");
radio4.setAttribute("name", "room");
radio4.setAttribute("type", "radio");
radio4.style.marginBottom = "30px";
form.appendChild(radio4);

let label10 = document.createElement("label");
label10.innerText = "Presidential Suite -$1200 per day";
form.appendChild(label10);

let break12 = document.createElement("br");
form.appendChild(break12);

let label11 = document.createElement("label");
label11.innerText = "Number of rooms required";
form.appendChild(label11);

let break11 = document.createElement("br");
form.appendChild(break11);

let inp7 = document.createElement("input");
inp7.setAttribute("type", "number");
inp7.style.width = "95%";
inp7.marginBottom = "20px";
inp7.setAttribute("type", "number");
inp7.style.marginBottom = "20px";
inp7.style.padding = "5px 1px";
form.appendChild(inp7);

let label12 = document.createElement("label");
label12.innerText = "Comments";
form.appendChild(label12);

let comment = document.createElement("textarea");
comment.style.width = "95%";
comment.style.height = "100px";
comment.style.marginBottom = "40px";
form.appendChild(comment);

let button1 = document.createElement("input");
button1.setAttribute("type", "button");
button1.setAttribute("value", "Book Now");
button1.style.padding = "10px 26px";
button1.style.borderRadius = "30px";
button1.style.background = "black";
button1.style.color = "white";
button1.style.fontSize = "16px";
button1.style.marginLeft = "80%";
button1.style.marginBottom = "20px";
form.appendChild(button1);
