console.log("Hello World");

let excuseParts = {
    let _introExcuse = [],
    let _middleExcuse = [],
    let _outroExcuse = [],

    get introExcuse () {
        return this._introExcuse;
    },
    set introExcuse (introExcuse) {
        this._introExcuse = introExcuse
    },

    get middleExcuse () {
        return this._middleExcuse;
    },
    set middleExcuse (middleExcuse) {
        this._middleExcuse = middleExcuse
    },

    get outroExcuse () {
        return this._outroExcuse;
    },
    set outroExcuse (outroExcuse) {
        this._outroExcuse = outroExcuse
    },
}