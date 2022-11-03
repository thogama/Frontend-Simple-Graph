<template>
  <Bar  :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: ['labels', 'label','data','colour'],
  data() {
    return {
      chartData: {

        labels: this.labels,
        datasets: [

          {
            data: this.data,
            backgroundColor: this.colour,
            label: this.label
          }
        ],


      },
      chartOptions: {
        
        responsive: true,
        aspectRatio:1.7
      }
    }
  }
}
</script>