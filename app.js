let content = document.querySelector('.contents');
axios
	.get('https://api.unsplash.com/photos/?client_id=Pwk70xY4OPrRz4hB3dw_5yE8l3IyDrwvbqTpsCAg7k8&per_page=15')
	.then(({ data }) => {
		console.log(data);
		let imager = '';
		for (const images of data) {
			// console.log(images.urls.thumb)
			let img = `
        <div class = 'cont'>
        <img src = ${images.urls.regular} alt = 'hey'>
        <div class = 'details'>
        <h3>${images.user.first_name}, ${images.likes}<h3>
        <h3 class = 'location'><i class="bi bi-geo-alt"></i>${images.user.location}<h3>
        </div>
        <div class = 'hover'>
        <h3>${images.user.first_name}, ${images.likes}<h3>
        <h3 class = 'locationa'><i class="bi bi-geo-alt"></i>${images.user.location}<h3>
		<div class="icos">
			<i class="bi bi-heart-fill"></i>
			<i class="bi bi-bookmark-star-fill"></i>
		</div>
        </div>
		
        </div>
        `;
			imager += img;
		}
		content.innerHTML = imager;
	})
	.then(() => {
		let nuul = document.querySelectorAll('.location');
		for (const nulls of nuul) {
			if (nulls.textContent.includes('null')) {
				nulls.style.display = 'none';
			}
		}
		let nuula = document.querySelectorAll('.locationa');
		for (const nulls of nuula) {
			if (nulls.textContent.includes('null')) {
				nulls.style.display = 'none';
			}
		}
	});
let input = document.querySelector('input');
function search() {
	axios
		.get(
			`https://api.unsplash.com/search/photos/?client_id=Pwk70xY4OPrRz4hB3dw_5yE8l3IyDrwvbqTpsCAg7k8&per_page=15&query=${input.value}`
		)
		.then(({ data }) => {
			let datas = data.results;
			let imager = '';
			for (const images of datas) {
				// console.log(images.urls.thumb)

				let img = `
            <img src = ${images.urls.regular} alt = 'hey'>
            
            `;
				imager += img;
			}
			content.innerHTML = imager;
		});
}
let click = document.querySelector('span');
function search() {
	axios
		.get(
			`https://api.unsplash.com/search/photos/?client_id=Pwk70xY4OPrRz4hB3dw_5yE8l3IyDrwvbqTpsCAg7k8&per_page=15&query=${input.value}`
		)
		.then(({ data }) => {
			let datas = data.results;
			let imager = '';
			for (const images of datas) {
				// console.log(images.urls.thumb)

				let img = `
				<div class = 'cont'>
				<img src = ${images.urls.regular} alt = 'hey'>
				<div class = 'details'>
				<h3>${images.user.first_name}, ${images.likes}<h3>
				<h3 class = 'location'><i class="bi bi-geo-alt"></i>${images.user.location}<h3>
				</div>
				<div class = 'hover'>
				<h3>${images.user.first_name}, ${images.likes}<h3>
				<h3 class = 'locationa'><i class="bi bi-geo-alt"></i>${images.user.location}<h3>
				<div class="icos">
					<i class="bi bi-heart-fill"></i>
					<i class="bi bi-bookmark-star-fill"></i>
				</div>
				</div>
				
				</div>
            
            `;
				imager += img;
			}
			content.innerHTML = imager;
		});
}
click.addEventListener('click', search);

document.querySelector('.openNav').addEventListener('click', () => {
	document.querySelector('.side').classList.add('active');
	
});
document.querySelector('.closeNav').addEventListener('click', () => {
	document.querySelector('.side').classList.remove('active');
	
});
