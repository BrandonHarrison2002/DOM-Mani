// When the user clicks the "Filter Articles" button, a menu appears with the checkboxes to filter. 
function showFilter() {
    var filter = document.getElementById("filterContent");
    if (filter.style.display === "none") {
        filter.style.display = "block";
    } else {
        filter.style.display = "none";
    }
}

//When the user clicks the "Add New Article" button, a form appears.
function showAddNew() {
    var form = document.getElementById("newContent");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

//When the user checks/unchecks a box for filtering, each of the articles of that type are hidden/shown accordingly.
function filterArticles() {
    var checkboxes = document.getElementById("filterContent").querySelectorAll('input');
    var articles = document.getElementById("articleList").querySelectorAll('article');

    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i]; 
        var articleid = checkbox.getAttribute("id");
        articleid = articleid.replace("Checkbox", "");
        var elements = document.getElementsByClassName(articleid);
        for (var j = 0; j < elements.length; j++) {
            if (checkbox.checked) {
                elements[j].style.display = "block";
            } else {
                elements[j].style.display = "none";
            }
        }
    }
}


//When the user enters a new article and presses "Add New Article", the content appears in the list with the correct styles.
function addNewArticle() {
    var articles = document.getElementById("articleList");
    var title = document.getElementById("inputHeader").value;
    var content = document.getElementById("inputArticle").value;
    var typeSelect = document.querySelector('input[name="articleType"]:checked').value;

    var newArticle = document.createElement("article");
    newArticle.classList.add(typeSelect);
    newArticle.id = "a" + (articles.children.length + 1);

    var newTitle = document.createElement("h2");
    newTitle.textContent = title;

    var newContent = document.createElement("p");
    newContent.textContent = content;

    var marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = typeSelect.substring(0, 1).toUpperCase() + typeSelect.substring(1);
    
    var readMore = document.createElement("p");
    var readMoreLink = document.createElement("a");
    readMoreLink.href = "#";
    readMoreLink.textContent = "Read more...";

    newArticle.appendChild(marker);
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newContent);
    articles.appendChild(newArticle);
    readMore.appendChild(readMoreLink);
    newArticle.appendChild(readMore);
    

    //CLEAR THE FORM
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.querySelectorAll('input[name="articleType"]').forEach(radio => radio.checked = false);
}