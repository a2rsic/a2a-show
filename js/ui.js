const $showContainer = $(".main-container");
const $singleShowContainer = $(".single-show-container");
const $actorsContainer = $(".single-show-actors-list")

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

const createSingleShowInfo = (show) => {
    return (`
    <section class="single-show-info-section">
        <h1 class="single-show-title">${show.name}</h1>
        <span class="single-show-genre">${show.genres[0]}</span>
        <span class="single-show-genre">${show.genres[1]}</span>
        <span class="single-show-genre">${show.genres[2]}</span>

        <p class="single-show-description">${show.summary}</p>
    </section>

    <section class="single-show-img-container">
        <img src="${show.image.original}"
        alt="show img" class="single-show-img">
    </section>
    `)
}

const displaySingleShow = (show) => {
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
        const $actorsListHtml = createActorsList(actor);
        // $actorsList.append($actorsListHtml);
        $actorsContainer.append($actorsListHtml)
    }

    )
}

export {
    displayShowCard,
    displaySingleShow,
    displayActors
}