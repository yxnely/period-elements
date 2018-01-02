const url = "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json"

const periodicTable = new Vue({
	el: '#app',
	data: {
		elements: [],
	},
	mounted() {
		axios.get(url)
			.then((res) => {
				this.elements = res.data.elements;
				console.log(this.elements);
			})
	}
});