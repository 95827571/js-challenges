let filmsToCheck = [
    "Film 1",
    "Film 2",
    "Ghostbusters",
    "Film 3",
]

for (let i = 0; i < filmsToCheck.length; i++) {
    const film = filmsToCheck[i];
    if (film.toLowerCase() == "ghostbusters") {
        console.log("YAY ITS GHOST BUSTERS!")
    } else {
        console.log("Boo! We want ghostbusters!")
    }
}