<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,

  props: ["chartData", "options"],

  mixins: [reactiveProp],

  watch: {
    chartData: {
      handler() {
        this.renderChart(this.chartData, this.options);
      },
      deep: true,
    },
  },
};
</script>