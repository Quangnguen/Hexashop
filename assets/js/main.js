const allProduct = document.querySelector(".all-product");
const imgFirst = document.getElementsByClassName("mySlides")[0];
const iconArrow = document.getElementsByClassName("icon-next");

iconArrow.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = imgFirst.clientWidth;

        allProduct.scrollLeft += icon.class == "left" ? -firstImgWidth: firstImgWidth;
    })
    
});