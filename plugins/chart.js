import Vue from 'vue'
import { Line,Pie  } from 'vue-chartjs'


Vue.component('line-chart', {
	extends: Line,
	props: ['data', 'options'],
	mounted () {
		this.renderChart(this.data, this.options)
	}
}),
Vue.component('Pie-chart', {
	extends: Pie,
	props: ['data', 'options'],
	mounted () {
		this.renderChart(this.data, this.options)
	}
})