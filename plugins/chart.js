import Vue from 'vue'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


Vue.component('my-chart', {
	props: ['data', 'options'],
	render: function(createElement) {
		return createElement('canvas', { 
			attrs: {
				width: "400",
				height: "400"
			}
		});
	},
	mounted() {
      const ctx = this.$el.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: this.data,
        options: this.options
      });
    }
});