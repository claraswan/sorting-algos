<script lang="ts">
import { defineComponent, defineProps } from 'vue';
import AlgoBox from '@/components/AlgoBox.vue'

defineProps({
    algorithms: Array<string>
})

export default defineComponent({
    props: {
        algorithms: {
            type: Array<string>,
            required: true
        }
    },
    components: {AlgoBox},
    setup(props, {emit}) {
        const selectAlgo = (algorithm) => {
            emit('algorithm-select', algorithm);
        }

        return {props, selectAlgo}
    }
})
</script>

<template>
    <div class="header__wrapper">
        <AlgoBox 
            v-for="algo in props.algorithms" 
            :algo="algo" 
            @click="selectAlgo(algo)"
        />
    </div>
</template>

<style scoped>
.header__wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 12rem;
}
</style>