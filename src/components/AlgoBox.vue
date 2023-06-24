<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        algo: {
            type: String,
            required: true
        }
    },
    setup(props) {

        return {props}
    }
})
</script>

<template>
    <div class="box">{{ props.algo }}</div>
</template>

<style scoped>
    .box {
        width: 10rem;
        height: 10rem;
        background: purple;
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
    }
</style>