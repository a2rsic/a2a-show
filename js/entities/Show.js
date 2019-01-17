class Show {
    constructor(id, name, genres, rating, image, summary) {
        this.id = id;
        this.name = name;
        this.genres = genres;
        this.rating = Number(rating).toFixed(1);
        this.image = image;
        this.summary = summary;
    }
}

export default Show;
