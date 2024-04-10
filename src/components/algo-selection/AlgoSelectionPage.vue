<script setup lang="ts">
import AlgoBox from '@/components/algo-selection/AlgoBox.vue';

const props = defineProps<{
    algorithms: Array<string>;
}>();
</script>

<template>
    <h1>Please select an algorithm to see visualized!</h1>
    <div class="algo-select__wrapper">
        <AlgoBox
            v-for="algo in props.algorithms"
            :key="algo"
            :algo="algo"
            @click="$emit('algorithm-select', algo)"
        />
    </div>
</template>

<style scoped>
.algo-select__wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 12rem;
}
</style>
