<script setup lang="ts">
import { ref } from 'vue';
import AlgoSelectionPage from '@/components/algo-selection/AlgoSelectionPage.vue';
import AlgoVisualizationPage from '@/components/algo-visualization/AlgoVisualizationPage.vue';
import { Algorithm } from '@/services/types';

let noAlgSelected = ref(true);
let selectedAlgorithm = ref('' as Algorithm);

const algoSelect = (algorithm: Algorithm) => {
    noAlgSelected.value = false;
    selectedAlgorithm.value = algorithm;
};
</script>

<template>
    <main>
        <AlgoSelectionPage
            v-if="noAlgSelected"
            :algorithms="Object.values(Algorithm)"
            @algorithm-select="algoSelect"
        />

        <AlgoVisualizationPage v-else :algorithm="selectedAlgorithm" />
    </main>
</template>

<style scoped lang="scss">
.content {
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.8rem;
    margin-top: 4rem;

    &__error {
        color: red;
        font-size: 1.8rem;
    }
}
</style>
