import * as data from "./data.js";
import * as ui from "./ui.js";


const initHomePage = () => {
    console.log("ready home page");

    data.getShows()
        .then(showList => {
            // console.log(showList);

            ui.displayShowCard(showList)

            $(".show-wrapper").on("click", onShowClickHandler)
        });


}

const onShowClickHandler = (event) => {
    console.log("my event", event);
    const { currentTarget } = event;
    const showId = $(currentTarget).attr("data-show-id")
    data.saveShowId(showId);

    window.location.href = "./singleShowPage.html"
}



const initSingleShowPage = () => {
    console.log("ready single show page");


    const showId = data.getShowId()
    data.getShow(showId)
        .then(show => {
            // console.log("my show", show);
            ui.hideLoader()
            ui.displaySingleShow(show)
        })

    data.getActors(showId)
        .then(actor => {
            // console.log("ACTOR", actor);
            ui.hideLoader()
            ui.displayActors(actor);

            $(".list-grid-icon").on("click")
        })
}

export {
    initHomePage,
    initSingleShowPage
}