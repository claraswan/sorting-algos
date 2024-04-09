<script setup lang="ts">
import AlgoVisualizationBarChart from '@/components/algo-visualization/AlgoVisualizationBarChart.vue'

import { Algorithm } from '@/services/types'
import { ref } from 'vue'
import bblSort from '@/algorithms/bubbleSort'

const props = defineProps<{
    algorithm: Algorithm
}>()

const numbersToSort = ref([2, 3, 1, 8]);

const startSort = async () => {
    console.log(props.algorithm === Algorithm.bubble)
    if (props.algorithm === Algorithm.bubble) {
        numbersToSort.value = await bblSort(numbersToSort.value);
    } else {
        return;
    }
}

</script>

<template>
    <h1>{{ algorithm }} sort</h1>
    <div class="algo-visual__wrapper">
        <AlgoVisualizationBarChart :data="numbersToSort" />
        <button class="btn btn-primary" @click="startSort">Start sort</button>
    </div>
</template>

<style scoped lang="scss"></style>