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

// Stampo array di oggetti con console.log
console.log(teamMembers);

// Mi prendo elemento inerente alla classe row-body per fare aggiunta del HTML
const elementRowBody = document.querySelector(".row-body");
elementRowBody.innerHTML = "";

console.log(elementRowBody);

for (let i = 0; i < teamMembers.length; i++) {
  elementRowBody.innerHTML += `<div class="col-30">
          <div class="card-body">
            <div>
              <img class="img-member" src="./${teamMembers[i].img}" alt="${teamMembers[i].name}"/>
            </div>
            <div class="informations-member">
              <h3 class="name-member">${teamMembers[i].name}</h3>
              <p class="job-member">${teamMembers[i].role}</p>
              <a class="link-member" href="#">${teamMembers[i].email}</a>
            </div>
          </div>
        </div> `;
}
