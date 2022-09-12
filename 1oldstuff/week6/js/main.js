// create a new task on +
function newTask() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myTask").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {} else {
      document.getElementById("taskList").appendChild(li);
  }
  document.getElementById("myTask").value = "";

  let span = document.createElement("SPAN");
  let exx = document.createTextNode("x");
  span.className = "deleter";
  span.appendChild(exx);
  li.appendChild(span)


  const deleter = document.getElementsByClassName("deleter");
  for (i = 0; i < deleter.length; i++) {
      deleter[i].onclick = function () {
          let div = this.parentElement;
          div.classList.add("deleted");
          div.style.display = "none";
      }
  }
}

// make the task be 'done' but not removed when clicked
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);

// filter class to show active, complete, all
function filter(e) {
  const filters = taskList.querySelectorAll('li');
  filters.forEach(function (item) {
      if (item.nodeName === "LI") {
          switch (e.target.value) {
              case "all":
                  if (item.classList.contains("deleted")) {
                      item.style.display = "none";
                  } else {
                      item.style.display = "block";
                  }
                  break;

              case "complete":
                  if (item.classList.contains("deleted")) {
                      item.style.display = "none";
                  } else if (item.classList.contains("done")) {
                      item.style.display = "block";
                  } else {
                      item.style.display = "none";
                  }
                  break;

              case "active":
                  if (item.classList.contains("deleted")) {
                      item.style.display = "none";
                  } else if (item.classList.contains("done")) {
                      item.style.display = "none";
                  } else {
                      item.style.display = "block";
                  }
                  break;
          }
      }
  });
}