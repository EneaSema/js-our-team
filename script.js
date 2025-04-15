const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// quando seleziono una card, mi si apre la pagina dedicata

// recupero elementi

console.log(teamMembers);

const elementRowBoody = document.querySelector("row-body");
console.log(elementRowBoody);

const elementCol30 = document.querySelector("col-30");
console.log(elementCol30);

const elementCardBody = document.getElementsByClassName("card-body");
console.log(elementCardBody);

const elementImgMember = document.getElementsByClassName("img-member");
console.log(elementImgMember);

const elementInformations = document.getElementsByClassName("informations");
console.log(elementInformations);

const elementNameMember = document.getElementsByClassName("name-member");
console.log(elementNameMember);

const elementJobMember = document.getElementsByClassName("job-member");
console.log(elementJobMember);

const elementLinkMember = document.getElementsByClassName("link-member");
console.log(elementLinkMember);

for (let i = 0; i < teamMembers.length; i++) {
  elementRowBody.innerHtml += elementCol30;
}
console.log(elementRowBody);
