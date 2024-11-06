const products = [
	{
		img: "./assets/img/image 2.jpg",
		title: "MO231 - Pomeranian Trắng",
		gender: "Đực",
		age: "02 tháng",
		price: "6.900.000 VND",
	},
	{
		img: "./assets/img/image 3.jpg",
		title: "MO502 - Poodle Tiny Vàng",
		gender: "Cái",
		age: "02 tháng",
		price: "3.900.000 VND",
	},
	{
		img: "./assets/img/image 4.jpg",
		title: "MO102 - Poodle Tiny Sepia",
		gender: "Đực",
		age: "02 tháng",
		price: "4.000.000 VND",
	},
	{
		img: "./assets/img/image 5.jpg",
		title: "MO512 - Alaskan Malamute",
		gender: "Đực",
		age: "03 tháng",
		price: "8.900.000 VND",
	},
	{
		img: "./assets/img/image 6.jpg",
		title: "MO231 - Pembroke Corgi",
		gender: "Đực",
		age: "02 tháng",
		price: "7.900.000 VND",
	},
	{
		img: "./assets/img/image 7.jpg",
		title: "MO502 - Pembroke Corgi",
		gender: "Cái",
		age: "02 tháng",
		price: "9.000.000 VND",
	},
	{
		img: "./assets/img/image 8.jpg",
		title: "MO231 - Pomeranian Trắng",
		gender: "Cái",
		age: "02 tháng",
		price: "6.500.000 VND",
	},
	{
		img: "./assets/img/image 9.jpg",
		title: "MO512 - Poodle Tiny",
		gender: "Đực",
		age: "02 tháng",
		price: "5.000.000 VND",
	},
];

const otherInfo = [
	{
		img: "./assets/img/other1.jpg",
		title: "Pomeranian là gì? Cách nhận biết chó Pomeranian",
        style: "-webkit-line-clamp: 3;",
		description:
			"Pomeranian hay còn gọi là chó Pomeranian (chó Pom) luôn nằm trong top những thú cưng dễ thương nhất. Không chỉ vậy, giống chó xiếc nhỏ nhắn, đáng yêu, thông minh, thân thiện và khéo léo.",
	},
	{
		img: "./assets/img/other2.jpg",
		title: "Chế độ ăn cho chó bạn cần biết",
        style: "-webkit-line-clamp: 4;",
		description:
			"Việc chia khẩu phần ăn cho chó thoạt nghe có vẻ đơn giản nhưng có một số quy tắc bạn nên biết để chó cưng dễ dàng hấp thụ các chất dinh dưỡng trong khẩu phần ăn. Dành cho những người mới bắt đầu nuôi chó, đặc biệt là chó con mới sinh có sức đề kháng tương đối yếu.",
	},
	{
		img: "./assets/img/other3.jpg",
		title: "Tại sao chó cắn phá đồ đạc và cách phòng ngừa hiệu quả",
        style: "-webkit-line-clamp: 3;",
		description:
			"Chó cắn là hiện tượng phổ biến trong quá trình phát triển. Tuy nhiên, không ai muốn thấy đồ đạc, vật dụng quan trọng của mình bị chó cắn.",
	},
];

const productsContainer = document.querySelector(".products-body");
const otherInfoContainer = document.querySelector(".other-info-body").querySelector(".products-body");

products.forEach((product) => {
	const productCard = document.createElement("div");
	productCard.className = "products-body__card";

	productCard.innerHTML = `
		<img class="products-body__card__img" src="${product.img}" alt="" />
		<div class="products-body__card__info">
			<h4>${product.title}</h4>
			<div>
				<span>Giống:<strong>${product.gender}</strong></span>
				<div style="display: flex; justify-content: center; align-items: center; width: 1.125rem; height: 1.125rem; background-color: transparent;">
					<img src="./assets/svg/Text.svg" alt="">
				</div>
				<span>Tuổi:<strong>${product.age}</strong></span>
			</div>
			<p>${product.price}</p>
		</div>
	`;

	productsContainer.appendChild(productCard);
});

otherInfo.forEach((info) => {
	const infoCard = document.createElement("div");
	infoCard.className = "products-body__card";

	infoCard.innerHTML = `
        <img class="products-body__card__img" src="${info.img}" alt="" />
        <div class="products-body__card__info">
            <span>Kiến thức thú cưng</span>
            <h4>${info.title}</h4>
            <p style="${info.style}">${info.description}</p>
        </div>
    `;

	otherInfoContainer.appendChild(infoCard);
});
