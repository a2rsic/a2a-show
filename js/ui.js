const $showContainer = $(".main-container");
const $singleShowContainer = $(".single-show-container");
const $actorsContainer = $(".single-show-actors-list");
const $searchInputValue = $(".search-field");


const getSearchValue = () => {
    const inputValue = $searchInputValue.val();

    return inputValue;
}

const resetInputValue = () => {

    $searchInputValue = ""
}

const filterShows = (showList) => {

    for (let i = 0; i < showList.length; i++) {
        if (!showList.filter(show => show.name.includes(getSearchValue()))) {
            $(this).hide()
        } else {
            $(this).show()
        }
    }


}

const createShowCard = (show) => {
    return (`
    <div data-show-id="${show.id}" class="show-wrapper">
        <a class="show-link" >
            <img src="${show.image.medium} "alt="photo" class="show-profile-img">
            <span class="show-rating">${show.rating}</span>
            <h3 class="show-title">${show.name}</h3>
        </a>
    </div>
`)
}

const displayShowCard = (showList) => {
    showList.forEach(show => {
        const $showCardHtml = createShowCard(show);
        $showContainer.append($showCardHtml);

    });
}

const displayGenre = (show) => {
    const { genres } = show;
    let html = "";
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        html += createGenreSpan(genre);
    }

    return html;
}

const createGenreSpan = (genre) => {
    return (`
    <div class="single-show-genre">${genre}</div>    
    `)
}

const createSingleShowInfo = (show) => {
    return (`
    <section class="single-show-info-section">
        <h1 class="single-show-title">${show.name}</h1>
        ${displayGenre(show)}
        <div class="single-show-description">${show.summary}</div>
    </section>

    <section class="single-show-img-container">
        <img src="${show.image.original}"
        alt="show img" class="single-show-img">
    </section>
    `)
}

const displaySingleShow = (show) => {
    $(".single-show-container").removeClass("hidden")
    const $singleShowInfHtml = createSingleShowInfo(show);
    $singleShowContainer.append($singleShowInfHtml)
}

const createActorsList = (actor) => {
    return (`
        <li>
            <img src="${actor.image.medium} "alt="Actor photo" class="single-show-actor-img">
            <h4 class="actor-name">${actor.name}</h4>
        </li>

    `)
}

const displayActors = (actor) => {
    actor.forEach(actor => {
        $(".single-show-actors-section").removeClass("hidden")
        const $actorsListHtml = createActorsList(actor);
        $actorsContainer.append($actorsListHtml)
    }

    )
}

const hideLoader = () => {
    $(".spinner").hide()
}

export {
    displayShowCard,
    displaySingleShow,
    displayActors,
    hideLoader,
    // getSearchValue,
    resetInputValue,
    filterShows
}