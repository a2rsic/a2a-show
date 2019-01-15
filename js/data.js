import Show from "./entities/Show.js";
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

export {
    getShows,
    getShow,
    saveShowId,
    getShowId
}