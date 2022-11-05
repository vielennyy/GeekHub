// export 
const strings = {
    str: undefined,

    setString: function(str) {
        if(str === undefined || str === '' || str === ' ') {
            this.str = ''
        }
        else if (typeof(str) === Number){
            this.str = toString(str)
        }
        else {
            this.str = str
        }
        return this.str
    },

    getString: function() {
        return this.str
    },

    getStringLength: function() {
        return (this.str).length
    },

    getReversedString: function() {
        return (this.str).split('').reverse().join('')
    },

}

export {strings}

