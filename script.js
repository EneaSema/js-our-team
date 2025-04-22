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

const elementRowBoody = document.querySelector(".row .row-body");
console.log(elementRowBoody);

const elementCol30 = document.querySelector(".col-30");
console.log(elementCol30);

const elementCardBody = document.querySelector(".card-body");
console.log(elementCardBody);

const elementImgMember = document.querySelector(".img-member");
console.log(elementImgMember);

const elementInformationsMember = document.querySelector(
  ".informations-member"
);
console.log(elementInformationsMember);

const elementNameMember = document.querySelector(".name-member");
console.log(elementNameMember);

const elementJobMember = document.querySelector(".job-member");
console.log(elementRowBoody);

const elementLinkMember = document.querySelector(".link-member");
console.log(elementLinkMember);

let currentCardBody = ``;
for (let i = 0; i < 6; i++) {
  currentCardBody += `<div class="card-body">
            <img src="./img/${currentCardBody[i].image}" alt="${currentCardBody.name}" />
            <div class="informations-member">
              <h3>${currentCardBody[i].name}</h3>
              <p>${currentCardBody[i].role}</p>
              <a>${currentCardBody[i].email}</a>
            </div>
          </div>
  `;
}

elementCardBody.innerHTML = currentCardBody;
