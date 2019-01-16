import Show from "./entities/Show.js";
import Actor from "./entities/Actor.js"
import BASE_URL from "./shared/const.js";

const getShows = () => {
    const showsUrl = BASE_URL + "/shows";

    return axios.get(showsUrl)
        .then(response => {
            return response.data;
        })
        .then(showArray => {

            const showsList = showArray.sort((show1, show2) => {
                return show2.rating.average - show1.rating.average;
            })
                .map(show => {
                    const { id, name, genres, rating, image, summary } = show;
                    return new Show(id, name, genres, rating.average, image, summary);
                })

            return showsList;
        })

}

const saveShowId = (showId) => {
    localStorage.setItem("show_id", showId)
}

const getShowId = () => {
    return localStorage.getItem("show_id");
}

const getShow = (showId) => {
    const showUrl = `${BASE_URL}/shows/${showId}`;

    return axios.get(showUrl)
        .then(response => {
            console.log("show response", response);
            return response.data;
        })
        .then(myShow => {
            return myShow
        })
}

const getActors = (showId) => {
    const actorsUrl = `${BASE_URL}/shows/${showId}/cast`;

    return axios.get(actorsUrl)
        .then(response => response.data)
        .then(actorsArray => {
            console.log("my actorsss", actorsArray);
            const actor = actorsArray.map(actor => {
                const { id, name, image } = actor.person;
                return new Actor(id, name, image)
            })
            return actor;
        })
}

export {
    getShows,
    getShow,
    saveShowId,
    getShowId,
    getActors
}