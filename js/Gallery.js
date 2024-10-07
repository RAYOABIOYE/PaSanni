document.getElementById('menuIcon').addEventListener('click', function() {
  var menuItems = document.getElementById('menuItems');
  if (menuItems.classList.contains('active')) {
      menuItems.classList.remove('active');
  } else {
      menuItems.classList.add('active');
  }
});

const peoplePics = document.querySelector("#people--pics");
const reunionPhotos = document.querySelector("#reunion--photos");
const reunionPhotos2 = document.querySelector("#reunion--photos2");
const mainDiv = document.querySelector(".main");

const imageSrc = {
  peoplePics: [
    "../assets/images/Gallery/Peeps1.jpg",
    "../assets/images/Gallery/Peeps2.jpg",
    "../assets/images/Gallery/Peeps3.jpg",
    "../assets/images/Gallery/Peeps4.jpg",
    "../assets/images/Gallery/Peeps5.jpg",
    "../assets/images/Gallery/Peeps6.jpg",
    "../assets/images/Gallery/Peeps7.jpg",
    "../assets/images/Gallery/Peeps8.jpg",
    "../assets/images/Gallery/Peeps9.jpg",
    "../assets/images/Gallery/Peeps10.jpg",
    "../assets/images/Gallery/Peeps11.jpg",
    "../assets/images/Gallery/Peeps12.jpg",
    "../assets/images/Gallery/Peeps13.jpg",
    "../assets/images/Gallery/Peeps14.jpg",
    "../assets/images/Gallery/Peeps15.jpg",
    "../assets/images/Gallery/Peeps16.jpg",
    "../assets/images/Gallery/Peeps17.jpg",
    "../assets/images/Gallery/Peeps18.jpg",
    "../assets/images/Gallery/Peeps19.jpg",
    "../assets/images/Gallery/Peeps20.jpg",
    "../assets/images/Gallery/Peeps21.jpg",
    "../assets/images/Gallery/Peeps22.jpg",
    "../assets/images/Gallery/Peeps23.jpg",
    "../assets/images/Gallery/Peeps24.jpg",
    "../assets/images/Gallery/Peeps25.jpg",
    "../assets/images/Gallery/House17.jpg",
  ],
  reunionPhotos:[
    "../assets/images/Gallery/DSC_8561.jpg",
    "../assets/images/Gallery/DSC_8562.jpg",
    "../assets/images/Gallery/DSC_8585.jpg",
    "../assets/images/Gallery/DSC_8603.jpg",
    "../assets/images/Gallery/DSC_8613.jpg",
    "../assets/images/Gallery/DSC_8626.jpg",
    "../assets/images/Gallery/DSC_8665.jpg",
    "../assets/images/Gallery/DSC_8670.jpg",
    "../assets/images/Gallery/DSC_8715.jpg",
    "../assets/images/Gallery/DSC_8724.jpg",
    "../assets/images/Gallery/DSC_8730.jpg",
    "../assets/images/Gallery/DSC_8812.jpg",
    "../assets/images/Gallery/DSC_8824.jpg",
    "../assets/images/Gallery/DSC_8827.jpg",
    "../assets/images/Gallery/DSC_8854.jpg",
    "../assets/images/Gallery/DSC_8856.jpg",
    "../assets/images/Gallery/DSC_8868.jpg",
    "../assets/images/Gallery/DSC_8871.jpg",
    "../assets/images/Gallery/DSC_8880.jpg",
    "../assets/images/Gallery/DSC_8905.jpg",
    "../assets/images/Gallery/DSC_8919.jpg",
    "../assets/images/Gallery/DSC_8920.jpg",
    "../assets/images/Gallery/DSC_8928.jpg",
    "../assets/images/Gallery/DSC_8944.jpg",
    "../assets/images/Gallery/DSC_8948.jpg",
    "../assets/images/Gallery/DSC_8949.jpg",
    "../assets/images/Gallery/DSC_8952.jpg",
    "../assets/images/Gallery/DSC_8953.jpg",
    "../assets/images/Gallery/DSC_8954.jpg",
    "../assets/images/Gallery/DSC_8955-1.jpg",
    "../assets/images/Gallery/DSC_8963.jpg",
    "../assets/images/Gallery/DSC_8974.jpg",
    "../assets/images/Gallery/DSC_8978.jpg",
    "../assets/images/Gallery/DSC_8979.jpg",
    "../assets/images/Gallery/DSC_8981.jpg",
    "../assets/images/Gallery/DSC_8983.jpg",
    "../assets/images/Gallery/DSC_8984.jpg",
    "../assets/images/Gallery/DSC_8987.jpg",
    "../assets/images/Gallery/DSC_8988.jpg",
    "../assets/images/Gallery/DSC_8989.jpg",
    "../assets/images/Gallery/DSC_8992.jpg",
    "../assets/images/Gallery/DSC_8994.jpg",
  ],
  reunionPhotos2:[
    "../assets/images/Gallery/DSC_0004.jpg",
    "../assets/images/Gallery/DSC_0006.jpg",
    "../assets/images/Gallery/DSC_0008.jpg",
    "../assets/images/Gallery/DSC_0009.jpg",
    "../assets/images/Gallery/DSC_0010.jpg",
    "../assets/images/Gallery/DSC_0012.jpg",
    "../assets/images/Gallery/DSC_0016.jpg",
    "../assets/images/Gallery/DSC_0017.jpg",
    "../assets/images/Gallery/DSC_0018.jpg",
    "../assets/images/Gallery/DSC_0021.jpg",
    "../assets/images/Gallery/DSC_0038.jpg",
    "../assets/images/Gallery/DSC_0038.jpg",
    "../assets/images/Gallery/DSC_0045.jpg",
    "../assets/images/Gallery/DSC_0046.jpg",
    "../assets/images/Gallery/DSC_0047.jpg",
    "../assets/images/Gallery/DSC_0059.jpg",
    "../assets/images/Gallery/DSC_0060.jpg",
    "../assets/images/Gallery/DSC_0073.jpg",
    "../assets/images/Gallery/DSC_0076.jpg",
    "../assets/images/Gallery/DSC_0086.jpg",
    "../assets/images/Gallery/DSC_0087.jpg",
    "../assets/images/Gallery/DSC_0097.jpg",
    "../assets/images/Gallery/DSC_0114.jpg",
    "../assets/images/Gallery/DSC_0115.jpg",
    "../assets/images/Gallery/DSC_0130.jpg",
    "../assets/images/Gallery/DSC_0150.jpg",
    "../assets/images/Gallery/DSC_0153.jpg",
    "../assets/images/Gallery/DSC_0162.jpg",
    "../assets/images/Gallery/DSC_0193.jpg",
    "../assets/images/Gallery/DSC_0194.jpg",
    "../assets/images/Gallery/DSC_0209.jpg",
    "../assets/images/Gallery/DSC_0211.jpg",
    "../assets/images/Gallery/DSC_0227.jpg",
    "../assets/images/Gallery/DSC_0238.jpg",
    "../assets/images/Gallery/DSC_9734.jpg",
    "../assets/images/Gallery/DSC_9737.jpg",
    "../assets/images/Gallery/DSC_9740.jpg",
    "../assets/images/Gallery/DSC_9743.jpg",
    "../assets/images/Gallery/DSC_9744.jpg",
    "../assets/images/Gallery/DSC_9745.jpg",
    "../assets/images/Gallery/DSC_9746.jpg",
    "../assets/images/Gallery/DSC_9748.jpg",
    "../assets/images/Gallery/DSC_9750.jpg",
    "../assets/images/Gallery/DSC_9751.jpg",
    "../assets/images/Gallery/DSC_9754.jpg",
    "../assets/images/Gallery/DSC_9756.jpg",
    "../assets/images/Gallery/DSC_9761.jpg",
    "../assets/images/Gallery/DSC_9764.jpg",
    "../assets/images/Gallery/DSC_9766.jpg",
    "../assets/images/Gallery/DSC_9770.jpg",
    "../assets/images/Gallery/DSC_9771.jpg",
  ]
};

const addImages = function (srcArray, parentDiv) {
  srcArray.forEach(function (src) {
    const html = `
    <div class="gallery__item">
    <img class='gallery__image' src="${src}" />
    </div>
    `;

    parentDiv.insertAdjacentHTML("beforeend", html);
  });
};

// Create images:
addImages(imageSrc.peoplePics, peoplePics);
addImages(imageSrc.reunionPhotos, reunionPhotos);
addImages(imageSrc.reunionPhotos2, reunionPhotos2);


const images = [
  ...imageSrc.peoplePics,
  ...imageSrc.reunionPhotos,
  ...imageSrc.reunionPhotos2,
];
console.log(images);
let imgSrc, imgIndex, targetEl;

mainDiv.addEventListener("click", function (e) {
  targetEl = e.target;

  if (!targetEl.classList.contains("gallery__image")) return;
  console.log(targetEl);

  imgSrc = targetEl.src;

  imgModal(imgSrc);

  //index of the next image
  imgIndex = images.indexOf(targetEl.getAttribute("src"));
});

//creating the modal
imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");

  //add modal to the parent element
  mainDiv.append(modal);

  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);

  //creating the close button
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times closeBtn");

  //close function
  closeBtn.addEventListener("click", () => modal.remove());

  //next and previous buttons
  const nextBtn = document.createElement("i");
  nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
  console.log(nextBtn);

  // change the src of current image to the src of next image
  nextBtn.onclick = () => {
    newImage.setAttribute("src", nextImg());
  };

  const prevBtn = document.createElement("i");
  prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");

  // change the src of current image to the src of pevious image
  prevBtn.onclick = () => {
    newImage.setAttribute("src", prevImg());
  };

  modal.append(prevBtn, newImage, closeBtn, nextBtn);
  nextBtn.removeAttribute("aria-hidden");
};

//next image function
const nextImg = () => {
  imgIndex++;

  //check if it is the the last image
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }

  //return src of the new image
  return images[imgIndex];
};

//previous image function
let prevImg = () => {
  imgIndex--;
  console.log(imgIndex);

  //check if it is the first image
  if (imgIndex < 0) {
    imgIndex = images.length - 1;
  }

  //return src of previous image
  return images[imgIndex];
};
