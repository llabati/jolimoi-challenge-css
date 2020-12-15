<template lang="pug">
#form
    input.search(type='text' name='name' placeholder="Brand, product, ingredient: type your search here" v-focus v-model="query")
    button.btn-search(type='submit' @click='send') Search
</template>

<script>
/* eslint-disable */
    export function validateQuery(str){
        const forbidden = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '#', '&', '§', '(']
        for (let letter of forbidden) {
            if (str.startsWith(letter)) return false
        }
        return true
    }

    export default {
        data(){
            return {
                query: ''
            }
        },
        methods: {
            send(){
                console.log(this.query)
                if (validateQuery(this.query)) {
                    this.$emit('new-search', this.query)
                }
                else {
                    this.$emit('warning')
                }
            }
        },
        directives: {
            focus(el){
                el.focus()
            }
        }
    
    } 
</script>

<style>
@media (max-width: 767px) {
    #form {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
    
}
@media (min-width: 768px) {
    #form {
        grid-column: 2 / 4;
        grid-row: 1 / 2;
    }
}
</style>
