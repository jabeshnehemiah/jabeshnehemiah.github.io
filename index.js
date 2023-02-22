const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const dateContainer = document.getElementById("date");
const timeContainer = document.getElementById("time");

const updateDate = () => {
  let date = new Date();
  dateContainer.innerText=`${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  timeContainer.innerText=`${date.getHours().toString().padStart(2,'0')}:${date.getMinutes().toString().padStart(2,'0')}`;

  setTimeout(updateDate, 1000)
}

updateDate();