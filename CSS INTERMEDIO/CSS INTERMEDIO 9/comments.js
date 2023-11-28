document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    
    var commentsList = document.getElementById("comments");
    var li = document.createElement("li");
    li.innerHTML = "<strong>" + name + ":</strong> (" + email + ") " + comment;
    commentsList.appendChild(li);
    
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
});
