import * as data from "./data.js";
import * as ui from "./ui.js";

const state = {
    isGrid: false,
    showList: []
}


const initHomePage = () => {
    console.log("ready home page");

    data.getShows()
        .then(showList => {

            state.showList = showList;
            ui.displayShowCard(showList);


            $(".search-input").on("keyup", onSearchShowHandler)

            $(".show-wrapper").on("click", onShowClickHandler)
        });


}

const onSearchShowHandler = (event) => {
    const inputValue = event.target.value.toLowerCase();

    const filterShow = state.showList.filter(show => {
        const showName = show.name.toLowerCase();
        return showName.includes(inputValue)
    })

    ui.displayShowCard(filterShow)
}


const onShowClickHandler = (event) => {
    const { currentTarget } = event;
    const showId = $(currentTarget).attr("data-show-id")
    data.saveShowId(showId);

    window.location.href = "./singleShowPage.html"
}



const initSingleShowPage = () => {


    const showId = data.getShowId()
    data.getShow(showId)
        .then(show => {
            ui.hideLoader()
            ui.displaySingleShow(show)
        })

    data.getActors(showId)
        .then(actor => {
            ui.hideLoader()
            ui.displayActors(actor);

            $(".list-grid-icon").on("click", event => {

                const icon = state.isGrid ?
                    "./images/grid-icon2.png" :
                    "./images/list-icon.png";

                $(".list-grid-icon").attr("src", icon)

                if (state.isGrid) {

                    ui.displayActors(actor);
                    state.isGrid = false;
                } else {

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
