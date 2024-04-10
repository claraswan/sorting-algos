<script setup lang="ts">
import { computed } from 'vue';
import { Bar } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    BarElement,
    CategoryScale,
    LinearScale,
    type CoreChartOptions,
} from 'chart.js';

const props = defineProps<{
    data: Array<number>;
}>();

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

const chartData = computed(() => {
    return {
        labels: [...props.data.map((i) => i)],
        datasets: [
            {
                backgroundColor: '#800080',
                data: props.data,
            },
        ],
    };
});

const chartOptions = {
    responsive: true,
    animation: {
        duration: 400,
        easing: 'linear',
    },
} as CoreChartOptions<'bar'>;
</script>

<template>
    <Bar id="bar-chart" :options="chartOptions" :data="chartData" />
</template>
