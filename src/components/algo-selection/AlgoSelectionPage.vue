<script setup lang="ts">
import AlgoBox from '@/components/algo-selection/AlgoBox.vue';

const props = defineProps<{
    algorithms: Array<string>;
}>();
</script>

<template>
    <h1 class="main-h1">Sorting algorithm visualizer</h1>
    <h4 class="text-muted m-4">Please select an algorithm to see visualized!</h4>

    <div class="algo-select__wrapper container">
        <div class="row">
            <div class="col-6">
                <AlgoBox v-for="algo in props.algorithms.slice(0, 2)" :key="algo" :algo="algo"
                    @click="$emit('algorithm-select', algo)" />
            </div>
            <div class="col-6">
                <AlgoBox v-for="algo in props.algorithms.slice(2)" :key="algo" :algo="algo"
                    @click="$emit('algorithm-select', algo)" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
