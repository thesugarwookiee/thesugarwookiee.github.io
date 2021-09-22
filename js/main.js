(function () {
    var ol = document.createElement('ol');
    ol.setAttribute('id', 'linkList');

    const listLinks = [{
        label: "Week One notes",
        url: 'week1/index.html'
    }, {
        label: "Week Two notes",
        url: 'week2/index.html'
    }];

    document.getElementById('createList').appendChild(ol);
    listLinks.forEach(createassignmentList);

    function createassignmentList(item) {
        var li = document.createElement('li');
        li.setAttribute('class', 'item');
        var a = document.createElement('a');

        ol.appendChild(li);
        li.appendChild(a);
        a.setAttribute('href', item.url);

        a.innerHTML = item.label;
    }
})();
