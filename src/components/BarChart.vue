  <script lang="ts">
  import { Bar } from 'vue-chartjs'
  import { defineComponent, mergeProps } from 'vue';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  
  export default defineComponent({
    props: { algorithm: String },
    components: { Bar },
    setup(props) {
        ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

        return {
            chartData: {
                title: props.algorithm,
                labels: [ '3', '5', '2' ],
                datasets: [ 
                    { 
                        backgroundColor: '#800080',
                        data: [3, 5, 2] 
                    } 
                ]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
  })
  </script>

<template>
    <Bar
      id="bar-chart"
      :options="chartOptions"
      :data="chartData"
    />
</template>
  