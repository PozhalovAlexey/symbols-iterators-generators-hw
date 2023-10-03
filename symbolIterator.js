class Team {
    constructor() {
        this.members = [];
    }

    add(character) {
        this.members.push(character)
    }

    * [Symbol.iterator]() {
        for (let i = 0; i < this.members.length; i++) {
            yield this.members(i)
        }
    }
}

function canIterate(obj) {
    return obj !== null && typeof obj[Symbol.iterator] === 'function'
}