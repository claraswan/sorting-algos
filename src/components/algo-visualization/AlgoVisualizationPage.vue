<script setup lang="ts">
import AlgoVisualizationBarChart from '@/components/algo-visualization/AlgoVisualizationBarChart.vue'
import { Algorithm } from '@/services/types'
import { onMounted, ref } from 'vue'
import bblSort from '@/algorithms/bubbleSort'

const props = defineProps<{
    algorithm: Algorithm
}>()

const numbersToSort = ref([] as Array<number>);
const numbersToSortLength = ref(10);

const startSort = () => {
    if (props.algorithm === Algorithm.bubble) {
        numbersToSort.value = bblSort(numbersToSort.value);
    } else {
        // handle this?
        return;
    }
}

const generateNumbers = () => {
    numbersToSort.value = Array.from(
        { length: numbersToSortLength.value }, 
        () => Math.floor(Math.random() * numbersToSortLength.value + 1)
    );
}

onMounted(() => {
    generateNumbers();
})

</script>

<template>
    <h1>{{ algorithm }} sort</h1>
    <div class="algo-visual__wrapper">
        <AlgoVisualizationBarChart :data="numbersToSort" />
        <div class="algo-visual__actions d-flex gap-2 m-4">
            <button class="btn btn-primary" @click="generateNumbers">Generate new numbers</button>
            <button class="btn btn-primary" @click="startSort">Start sort</button>
        </div>

    </div>
</template>

<style scoped lang="scss">
.algo-visual {
    &__wrapper {
        max-height: 70vh;
        width: 100%;
    }
}
</style>