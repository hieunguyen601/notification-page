const markAll = document.querySelector(".mark-all");

markAll.addEventListener("click", () => {
  const allNew = document.querySelectorAll(".notification.new");
  allNew.forEach((notification) => {
    notification.classList.remove("new");
  });

  updateCount();
});

function alreadyRead(event) {
  const notification = event.currentTarget;

  if (notification.classList.contains("new")) {
    notification.classList.remove("new");
  } else {
    notification.classList.add("new");
  }

  updateCount();
}

function updateCount() {
  const count = document.querySelectorAll(".notification.new").length;
  document.querySelector(".count").textContent = count;
}
