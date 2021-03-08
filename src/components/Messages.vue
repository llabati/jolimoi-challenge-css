<template lang="pug">
p#message {{ message }} 
        //You can enter words only!
        //p#loader(v-if="loading") Loading... Be patient, it could take some time.
        //p#failure(v-if="problem") Server failed: {{ error }}. We are deeply sorry for the inconvenience. Can you retry later?
        //p#empty(v-if="zero") Sorry, our server has not find any product. Have you another query?     
</template>

<script>
export default {
    props: [ 'message' ]   
}
</script>

<style>
@media (max-width: 767px) {
    #message {
        grid-column: 1 / 2;
        grid-row: 2 / 4;
    }
}
@media (min-width: 768px) {
    #message {
        grid-column: 2 / 4;
        grid-row: 2 / 4;
        }

}
</style>
