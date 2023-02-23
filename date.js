const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

const updateDate = () => {
  const dateContainer = document.getElementsByClassName("date")[0]
  const date = new Date()
  dateContainer.innerHTML = `${days[date.getDay()-1]}, ${months[date.getMonth()]} ${date.getDate()}`
  console.log(date.getMonth())
}

export { updateDate }