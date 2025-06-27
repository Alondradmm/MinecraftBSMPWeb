// Abrir notificación
function OpenToast(){
    toast = document.querySelector(".toast")
    progress = document.querySelector(".progress")

    toast.classList.add("active")
    progress.classList.add("active")

    setTimeout(() => {
        toast.classList.remove("active")
    }, 5000)

    setTimeout(() => {
        progress.classList.remove("active")
    }, 5300)
}