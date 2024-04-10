<script setup lang="ts">
import AlgoBox from '@/components/algo-selection/AlgoBox.vue';

const props = defineProps<{
    algorithms: Array<string>;
}>();
</script>

<template>
    <h1 class="main-h1">Please select an algorithm to see visualized!</h1>
    <div class="algo-select__wrapper">
        <AlgoBox v-for="algo in props.algorithms" :key="algo" :algo="algo" @click="$emit('algorithm-select', algo)" />
    </div>
</template>

<style scoped>
.algo-select__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    flex-wrap: wrap;
    width: 80vw;
    min-height: 60vh;
}
</style>
