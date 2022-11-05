export const calc = {
    value: undefined,
    setValue: function(number) {
        this.value = +number
        return this
    },
    getValue: function() {
        console.log(this.value)
        return this
    },
    add: function(a) {
        this.value += a
        return this
    },
    remove: function(a) {
        this.value -= a
        return this
    },
    multiple: function(a) {
        this.value *= a
        return this
    },
    divide: function(a) {
        this.value /= a
        return this
    },
    pow: function(a) {
        this.value = Math.pow(this.value, a)
        return this
    },
}


