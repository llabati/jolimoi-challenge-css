<template lang="pug">
.square
    .title
        h1 {{ title }}
</template>

<script>
    export default {
        props: {
            title: String
        } 
    }
</script>

<style lang="stylus">
@media (max-width: 767px) {
    .square {
        grid-column: 1 / 4
        grid-row: 1 / 3
    }
    
}
@media (min-width: 768px) {
    .square {
        grid-column: 1 / 4
        grid-row: 1 / 3
    }
    
}   
</style>