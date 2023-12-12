

 const SurpriseBtn = document.getElementById("surprisebtn");
 const quotes = document.getElementById("quotehtml");
 const username = document.getElementById("namehtml");
 const images = document.getElementById("picture");
 const profession = document.getElementById("jobb");


 SurpriseBtn.addEventListener("click", function(){

      let person = {

          name: "Caleb Ola",
          image: "woman.jfif",
          job: "Back-End Developer",
          quote: " “The only person you are destined to become is the person you decide to be, so believe in yourself, you know more than you think you do.” "
          

      };
      let person1 = {

         name: "Mister Rogers",
         image: "wamn1.jfif",
         job: "Product Design Lead",
         quote:" “There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind”."
         

     };
     let person2 = {

      name: "John Wooden",
      image: "man.jfif",
      job: "Back-End Developer",
      quote: " “Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.”"
      

  };
  let person3 = {

   name: "Sheryl Sandberg",
   image: "man1.jfif",
   job: "Sales Representative",
   quote: " “We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women’s voices are heard and heeded, not overlooked and ignored.”"
   

};
let person4 = {

   name:  "Ayn Rand",
   image: "man2.jfif",
   job: "Business Development Manager",
   quote: " “I swear, by my life and my love of it, that I will never live for the sake of another man, nor ask another man to live for mine.”"
   

};

   

let rndArray =[];

rndArray.push(person);
rndArray.push(person1);
rndArray.push(person2);
rndArray.push(person3);
rndArray.push(person4);



function randomnum(){

   let random = Math.floor(Math.random()*5);

       return rndArray[random];
}

let jackman = randomnum();

username.textContent = jackman.name;
quotes.textContent = jackman.quote;
images.src = jackman.image;
profession.textContent = jackman.job;

document.querySelector(".display1").style.display = "block";


console.log(jackman);
 })
