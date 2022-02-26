var dateObj = new Date();
var weekday = dateObj.toLocaleString("default", { weekday: "long" });
const getfullDate = dateObj.toUTCString().toString().split(", ")[1].split(" ");
const date = getfullDate[0] + " " + getfullDate[1] + " " + getfullDate[2];
const weekdayDOM = document.getElementById("weekday");
const dateDOM = document.getElementById("date");

weekdayDOM.innerText = weekday;
dateDOM.innerText = date;

//Responsive menu
const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar-menu");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-menu__collapsed");
});

const