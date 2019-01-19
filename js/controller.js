import * as data from "./data.js";
import * as ui from "./ui.js";

const state = {
    isGrid: false,
}


const initHomePage = () => {
    console.log("ready home page");

    data.getShows()
        .then(showList => {
            // console.log("bu", showList);

            ui.displayShowCard(showList);

            $(".search-input").on("keyup", onSearchShowHandler)

            $(".show-wrapper").on("click", onShowClickHandler)
        });


}
//set state: showList
//filter show
//displayShowCard
const onSearchShowHandler = (event) => {
    // console.log("my event", event);
    const inputValue = event.target.value.toLowerCase();
    // const showField = $(".show-wrapper");

    // Array.from(showField).forEach(show => {
    //     ui.hideLoader()
    //     const showName = show.firstElementChild.textContent;
    //     if (showName.toLowerCase().includes(inputValue)) {
    //         show.style.display = "block"
    //     } else {
    //         show.style.display = "none"
    //     }
    // })

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
            // ui.displayActorsGrid(actor)
            ui.displayActors(actor);

            $(".list-grid-icon").on("click", event => {
                console.log('event', event);

                const icon = state.isGrid ?
                    "./images/grid-icon2.png" :
                    "./images/list-icon.png";

                $(".list-grid-icon").attr("src", icon)

                if (state.isGrid) {

                    // Change to list 

                    ui.displayActors(actor);
                    state.isGrid = false;
                } else {

                    // Change to grid

                    ui.displayActorsGrid(actor);
                    state.isGrid = true;

                }

            })
        })
}

export {
    initHomePage,
    initSingleShowPage
}