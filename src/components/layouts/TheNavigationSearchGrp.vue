<template>
    <div>
        <base-nav-button title="Genre"></base-nav-button>
        <base-nav-button title="Rating"></base-nav-button>
        <input type="text" />
        <base-nav-button title="Submit" type="submit"></base-nav-button>
    </div>
</template>

<script>

import BaseNavButton from '../UI/BaseNavButton.vue';

export default {
    components: { BaseNavButton },
    setup() {
        
    },
}
</script>

<style scoped>

div {
    float: left;
}

input {
    width: 30%;
    height: 3rem;
    font-size: 2rem;
}



</style>