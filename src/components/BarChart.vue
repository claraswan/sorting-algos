<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const props = defineProps<{
  data: Array<number>
  algorithm: string
}>()

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const chartData = {
    title: props.algorithm,
    labels: [...props.data],
    datasets: [ 
        { 
            backgroundColor: '#800080',
            data: [...props.data]
        } 
    ]
}
const chartOptions = {responsive: true}

</script>

<template>
    <Bar
      id="bar-chart"
      :options="chartOptions"
      :data="chartData"
    />
</template>
  