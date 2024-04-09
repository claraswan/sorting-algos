<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        algo: {
            type: String,
            required: true
        },
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
        width: 15rem;
        height: 90%;
        border: 2px solid #800080;
        background-color: #fff;
        color: #800080;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        border-radius: 1rem;
        box-shadow: 10px 10px 45px 0px rgba(0,0,0,0.44);
        -webkit-box-shadow: 10px 10px 45px 0px rgba(0,0,0,0.44);
        -moz-box-shadow: 10px 10px 45px 0px rgba(0,0,0,0.44);
    }
</style>