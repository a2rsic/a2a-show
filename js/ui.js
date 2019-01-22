const $showContainer = $(".main-container");
const $singleShowContainer = $(".single-show-container");
const $actorsContainer = $(".single-show-actors-list");
const $actorsGrid = $(".grid");



const createShowCard = (show) => {
    return (`
    <div data-show-id="${show.id}" class="show-wrapper">
        <a class="show-link" >
            <img src="${show.image.medium} "alt="photo" class="show-profile-img">
            <div class="show-rating">${show.rating}</div>
            <h3 class="show-title">${show.name}</h3>
        </a>
    </div>
`)
}


const displayShowCard = (showList) => {
    $showContainer.html("")
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
    $(".single-show-actors-section").removeClass("hidden")

    $actorsContainer.html("")
    $actorsGrid.html("")

    actor.forEach(actor => {
        const $actorsListHtml = createActorsList(actor);
        $actorsContainer.append($actorsListHtml)
    }

    )
}

const createActorsGridView = (actor) => {
    return (`
        <div class="single-show-grid">
            <img src="${actor.image.medium} "alt="Actor photo" class="single-show-actor-img-grid">
            <h4 class="actor-name-grid">${actor.name}</h4>
        </div>
    `)
}

const displayActorsGrid = (actor) => {
    $(".single-show-actors-section").removeClass("hidden");

    $actorsGrid.html("")
    $actorsContainer.html("")

    actor.forEach(actor => {
        const $actorGridHtml = createActorsGridView(actor);
        $actorsGrid.append($actorGridHtml)
    })
}

const hideLoader = () => {
    $(".spinner").hide()
}


export {
    displayShowCard,
    displaySingleShow,
    displayActors,
    hideLoader,
    displayActorsGrid,
}