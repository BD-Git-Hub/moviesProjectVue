<template>
    <div class="container">
         <the-search-bar-group/>
        <the-navigation-group/>
        
    </div>
</template>


<script>

import TheNavigationGroup from "../layouts/TheNavigationGroup.vue";
import TheSearchBarGroup from '../layouts/TheNavigationSearchGrp.vue';



export default {
    components: {
          TheSearchBarGroup, TheNavigationGroup
    },
    setup() {
        
    },
}
</script>

<style scoped>

.container {
    height: 8vh;
    background: red;
    margin-inline: auto;
    width: 100%;
}

</style>