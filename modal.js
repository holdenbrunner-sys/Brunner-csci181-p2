//-------------------------------------ARRAY----------------------------
const projects = [
  {
    title: "Index",
    details:
      "Index homepage. Contains hero image, Input forms, and Tailwind style code. ",
    link_text: "View in Github",
    href: "https://github.com/holdenbrunner-sys/Brunner-csci181-practice/blob/main/index.html",
  },
  {
    title: "Dark Mode",
    details:
      "Uses button clicks to toggle class of the body. Switches CSS style depending on state.",
    link_text: "View in Github",
    href: "https://github.com/holdenbrunner-sys/Brunner-csci181-practice/blob/main/scripts/theme.js",
  },
  {
    title: "Bento Grid",
    details: "Uses a grid display to create a bento box style grid.",
    link_text: "View in Github",
    href: "https://github.com/holdenbrunner-sys/Brunner-csci181-practice/blob/main/bento-grid.html",
  },
  {
    title: "Weather",
    details: "Displays the current weather.",
    link_text: "View in Github",
    href: "https://github.com/holdenbrunner-sys/Brunner-csci181-practice/blob/main/weather.html",
  },
  {
    title: "Weather Script",
    details:
      "The JavaScript used to display the current weater. It fetches the data using try/except/finally.",
    link_text: "View in Github",
    href: "https://github.com/holdenbrunner-sys/Brunner-csci181-practice/blob/main/scripts/weather.js",
  },
  {
    title: "Redesign",
    details:
      "First Major Project. Redesigned a poorly made website homepage using improved web design techniques",
    link_text: "View in Github",
    href: "https://github.com/holdenbrunner-sys/brunner-csci181-p1",
  },
];
//------------------------------------Modal Elements--------------------
const modal = document.querySelectorAll("[data-index]");
const modal_title = document.getElementById("project-title");
const modal_details = document.getElementById("project-details");
const modal_link_details = document.getElementById("project-link-text");
const modal_link = document.getElementById("project-link");

const my_dialog = document.getElementById("mydialog");
const close_button = document.getElementById("close_button");

//------------------------------------Functions-------------------------
function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;
  my_dialog.showModal();
  modal_title.textContent = projects[index].title;
  modal_details.textContent = projects[index].details;
  modal_link_details.textContent = projects[index].link_text;
  modal_link.textContent = projects[index].href;
  document.body.style.overflow = "hidden";
}
function onCardClicked(event) {
  const clicked_card = event.currentTarget;
  const index = Number(clicked_card.dataset.index);
  openModalByIndex(index);
}

for (let i = 0; i < modal.length; i++) {
  modal[i].addEventListener("click", onCardClicked);
}
close_button.addEventListener("click", () => {
  my_dialog.close();
  document.body.style.overflow = "";
});
