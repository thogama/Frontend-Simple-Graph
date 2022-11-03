<template>
  <Line :chart-options="chartOptions" :chart-data="chartData" />
</template>
<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
)

export default {
  name: 'LineChart',
  components: { Line },
  props: ['labels', 'datasets'],
  data() {
    return {
      chartData: {

        labels: this.labels,
        datasets: this.datasets


      },
      chartOptions: {
        
        responsive: true,
        aspectRatio: 1.7
      }
    }
  }
}

</script>
