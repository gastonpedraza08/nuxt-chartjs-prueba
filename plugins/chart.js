import Vue from 'vue'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


Vue.component('my-chart', {
	props: ['data', 'options', 'id'],
	render: function(createElement) {
		return createElement('canvas', { 
			attrs: {
				id: this.id,
				width: "400",
				height: "400"
			}
		});
	},
	mounted() {
      const ctx = document.getElementById(this.id).getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: this.data,
        options: this.options
      });
    }
});