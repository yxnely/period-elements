const periodicTable = new Vue({
	el: '#app',
	data: {
		url: "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json",
		show: false,
		elements: [],
	},
	mounted() {
		axios.get(this.url)
			.then((res) => {
				results = res.data.elements;
				
				for (var i = 0; i < results.length; i++) {
					if (results[i].number === 1) {
						const emptyContent = "0,".repeat(15).split(",");
						this.elements = [results[i], ...emptyContent];
					} else if (results[i].number === 4 || results[i].number === 12) {
						const emptyContent = "0,".repeat(9).split(",");
						this.elements = [...this.elements, results[i], ...emptyContent];
					} else if (results[i].number === 57 || results[i].number === 89) {
						
					} else {
						this.elements = [...this.elements, results[i]];
					}
				}

				// console.log(this.elements);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	methods: {
		showDetails(evt) {

		},
	}
});