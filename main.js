document.addEventListener("click", function(e) {
    if(e.target.classList.contains("w-100")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('m1'))
        myModal.show()
    }
})
