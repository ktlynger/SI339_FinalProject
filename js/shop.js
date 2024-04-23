document.querySelectorAll('.sortby').addEventListener('click', function () {
    var filter = this.getAttribute("data-filter");

    items.forEach(function(item) {
                if (filter === "all") {
                    item.style.display = "";
                } else if (item.classList.contains(filter.substring(1))) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
