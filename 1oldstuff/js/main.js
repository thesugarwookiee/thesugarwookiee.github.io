(function () {
    var ol = document.createElement('ol');
    ol.setAttribute('id', 'linkList');

    const listLinks = [{
            label: "Week One notes",
            url: 'week1/index.html'
        }, {
            label: "Week Two notes",
            url: 'week2/index.html'
        }, {
            label: "Week Three notes",
            url: 'week3/index.html'
        },
        {
            label: "Week Four notes",
            url: 'week4/index.html'
        },
        {
            label: "Week Five notes",
            url: 'week5/index.html'
        },
        {
            label: "To Do Challenge",
            url: 'week6/index.html'
        },
        {
            label: "Week Seven notes",
            url: 'week7/index.html'
        },
        {
            label: "Week Eight notes",
            url: 'week8/index.html'
        },
        {
            label: "Week Nine notes",
            url: 'week9/index.html'
        },
        {
            label: "Week Ten notes",
            url: 'week10/index.html'
        },
        {
            label: "Final Application",
            url: 'final/index.html'
        }
    ];

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