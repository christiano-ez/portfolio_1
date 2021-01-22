const excuseParts = {
    _intro : [],
    _middle : [],
    _outro : [],

    get intro () {
        return this._intro;
    },
    set intro (intro) {
        this._intro = intro
    },

    get middle () {
        return this._middle;
    },
    set middle (middle) {
        this._middle = middle
    },

    get outro () {
        return this._outro;
    },
    set outro (outro) {
        this._outro = outro
    }
};

const randExcuse = () => {
    let firstPart = excuseParts.intro[Math.floor(Math.random()*excuseParts.intro.length)];
    let secondPart = excuseParts.middle[Math.floor(Math.random()*excuseParts.middle.length)];
    let thirdPart = excuseParts.outro[Math.floor(Math.random()*excuseParts.outro.length)];

    console.log(firstPart + secondPart + thirdPart);
};

excuseParts.intro = ["Sorry I am late, ", "I must appologize, "];
console.log(excuseParts.intro);

excuseParts.middle = ["my pants caught fire ", "all my shoes were stolen "];
console.log(excuseParts.middle);

excuseParts.outro = ["during my shower.", "as I had breakfast"];
console.log(excuseParts.outro);

randExcuse()