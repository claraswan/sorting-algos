<script setup lang="ts">
import { computed, ref } from 'vue';
import { Bar } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    BarElement,
    CategoryScale,
    LinearScale,
    type ChartOptions
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
                backgroundColor: '#5129a4',
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
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            display: false,
            grid: {
                display: false
            }
        }
    }
} as ChartOptions<'bar'>;
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <Bar id="bar-chart" :options="chartOptions" :data="chartData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
