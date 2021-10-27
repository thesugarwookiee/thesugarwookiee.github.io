import Comments from '../model/comments.js'

export default class Hikes {
    constructor({ name, imgSrc, imgAlt, distance, difficulty, description, directions } = {}) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.distance = distance;
        this.difficulty = difficulty;
        this.description = description;
        this.directions = directions;

        this.comments = new Comments({ hikeName: this.name, type: "hike" })
    }

    render() {
        return `
        <li data-hike-name="${this.name}">
            <h2 class="hikeStyles__header">${this.name}</h2>
            <div class="container">
                <div class="hikeStyles__image"><img src="${this.imgSrc}" alt="${this.imgAlt}"></div>
                <div class="hikeStyles__content">
                    <div>
                        <h3>Distance</h3>
                        <p>${this.distance}</p>
                    </div>
                    <div>
                        <h3>Difficulty</h3>
                        <p>${this.difficulty}</p>
                    </div>
                </div>
            </div>
        </li>`
    }

    renderDetailed() {
        return `
        <li>
            <h2 class="hikeStyles__header">
                <button onclick="window.location.reload()" id="back">Go Back</button>
                <span>${this.name}</span>
            </h2>
            <div class="hikeStyles__image"><img src="${this.imgSrc}" alt="${this.imgAlt}"></div>
            <div class="hikeStyles__content">
                <div>
                    <h3>Distance</h3>
                    <p>${this.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${this.difficulty}</p>
                </div>
                <div>
                    <h3> Description </h3>
                    <p>${this.description}</p>
                </div>
                <div>
                    <h3> Directions </h3>
                    <p>${this.directions}</p>
                </div>
            </div>
        </li>
        <li id="commentinput">
            <div>
            <h3>Add Comment:</h3>
            <textarea placeholder="Enter your comment here" id="commenttextarea"></textarea>
            <button id="commentbutton">Submit Comment</button>
            </div>
        </li>
        ${this.comments.render()}
        `
    }
}

