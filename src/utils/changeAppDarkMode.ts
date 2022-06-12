function toDark() {
    document.documentElement.classList.add("dark")
}

function toLight() {
    document.documentElement.classList.remove("dark")
}

export { toDark, toLight }