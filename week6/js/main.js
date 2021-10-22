// create a new task on +
function newTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myTask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {} else {
        document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("myTask").value = "";

    var span = document.createElement("SPAN");
    var exx = document.createTextNode("x");
    span.className = "deleter";
    span.appendChild(exx);
    li.appendChild(span)

    for (i = 0; i < deleted.length; i++) {
        deleted[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// make a button to close
const tasks = document.getElementsByTagName("li");
var i;
for (i = 0; i < tasks.length; i++) {
    var goodbye = document.createTextNode("x");
    var span = document.createElement("span");
    span.className = "deleter";
    span.appendChild(goodbye);
    tasks[i].appendChild(span);
}

// close items on x
const deleted = document.getElementsByClassName("deleter");
var i;
for (i = 0; i < deleted.length; i++) {
    deleted[i].onclick = function () {
        var div = this.parentElement;
        div.classList.add("deleted");
        div.style.display = "none";
    }
}

// make the task be 'done' but not removed when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);

// make the task take the 'deleted' class
var dump = document.querySelector('ul');
dump.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'SPAN') {
        ev.target.classList.toggle('deleted');
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
                    } else if (item.classList.contains("done")){
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                    break;

                case "active":
                    if (item.classList.contains("deleted")) {
                        item.style.display = "none";
                    } else if (item.classList.contains("done")){
                        item.style.display = "none";
                    } else {
                        item.style.display = "block";
                    }
                    break;
            }
        }
    });
}
