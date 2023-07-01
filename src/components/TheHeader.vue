<script setup lang="ts">
import { ref } from 'vue';
import AlgoBox from '@/components/AlgoBox.vue'

const props = defineProps<{
    algorithms: Array<string>
}>()

let inputGiven = ref(false);
const emit = defineEmits(['need-input', 'algorithm-select']);

const selectAlgo = (algorithm) => {
    if (!inputGiven) {
        emit('need-input');
    } else {
        emit('algorithm-select', algorithm);
    }
}

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