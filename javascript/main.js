document
.getElementById("see-all-link")
.addEventListener("click", function (event) {
    event.preventDefault();
    var companyList = document.getElementById("company-list");
    if (companyList.style.display === "none") {
    companyList.style.display = "block";
    this.textContent = "Hide All";
    } else {
    companyList.style.display = "none";
    this.textContent = "See All";
    }
});

var companyItems = document.querySelectorAll(".company-item");
companyItems.forEach(function (item) {
item.addEventListener("click", function () {
    alert("Selected Company: " + this.textContent);
});
});
