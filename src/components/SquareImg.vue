<template lang="pug">
//img(src="require('../../resources/beauty-products.jpg')", alt="beauty products").total
//img(src="../assets/beauty-products.jpg", alt="beauty products").total
img(:src='image', alt="beauty products").total
</template>


<script>
    export default {
        props: [ 'image' ]
    }
</script>

<style>
@media (max-width: 767px) {
    .total {
        grid-column: 1 / 4;
        grid-row: 3 / 5;
    }
}
@media (min-width: 768px) {
    .total {
        grid-column: 4 / 7;
        grid-row: 1 / 3;
    }
}   
</style>