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


    // "https://drive.google.com/file/d/1PY107_vZJzMrVpdUWIunHsXK08mhXveh/view?usp=drive_link",
    // "https://drive.google.com/file/d/10s-ie6MBssik94xNTk19ocSBhFc5S1kq/view?usp=drive_link",
    // "https://drive.google.com/file/d/1m_5ZT_gwSp5gb5Y7PtunhOwvLcYRrkl6/view?usp=drive_link",
    // "https://drive.google.com/file/d/1tpzCjJbIsoLtBfK15VHvApmngXWze5-Z/view?usp=drive_link",
    // "https://drive.google.com/file/d/1QZHAvwSgC_BQ0DeWTsQ5bubG650vDf9P/view?usp=drive_link",
    // "https://drive.google.com/file/d/1DcsOEyALTCaIYINtg1WVv_SCs-gqwzln/view?usp=drive_link",
    // "https://drive.google.com/file/d/1dQlOYRSfzzpuNKjpEsyp-6Dnbla94X7t/view?usp=drive_link",
    // "https://drive.google.com/file/d/1_vLWouYgRM9hoOA_qDSIIoOrQXz1rKVc/view?usp=drive_link",
    // "https://drive.google.com/file/d/1WH4lD5_h2uZJ-DQsQ3_V1xTqfHe8agQm/view?usp=drive_link",
    // "https://drive.google.com/file/d/1_hCzu3nIa-y1njCsyRTpP11Oke0AR5gi/view?usp=drive_link",
    // "https://drive.google.com/file/d/1vnbJ0rFPUNoe9dYp0Q0-StzHHqeVobRD/view?usp=drive_link",
    // "https://drive.google.com/file/d/16uvf7PAKVaKQFYHdmn7VekMRmHSlS98s/view?usp=drive_link",
    // "https://drive.google.com/file/d/1mRIfx91kIYnADDWSquf3jvcsYn30yMrt/view?usp=drive_link",
    // "https://drive.google.com/file/d/1ux4kDPLMqQLxhhKGH_3i-U-zdcoeDspm/view?usp=drive_link",
    // "https://drive.google.com/file/d/1IyTMiOVFUAKzc6beOwMavDG5wNT20pwH/view?usp=drive_link",
    // "https://drive.google.com/file/d/1ehhVuP5IZASMK1-l8CdqUtvyC1n6Qvm2/view?usp=drive_link",
    // "https://drive.google.com/file/d/1cUVu6r5ur7BYDVDw0bG5uE9tJHzWhcvb/view?usp=drive_link",
    // "https://drive.google.com/file/d/1CCWKC8gHTPMeF46GH-DJ2yIqB9w2tMgB/view?usp=drive_link",
    // "https://drive.google.com/file/d/1cTSP38UcjqCu1t2fXQ5SiOokHTgQNID9/view?usp=drive_link",
    // "https://drive.google.com/file/d/1I70kz20hY8YcrPTb-zcl8_KOPhVTtl-f/view?usp=drive_link",
    // "https://drive.google.com/file/d/1Ncu9QhVqI_FAxGahm36PBvps3nAtYwtT/view?usp=drive_link",
    // "https://drive.google.com/file/d/1ih-LHIrecQoo8ijy2SFPaMFR3NgSANqu/view?usp=drive_link",
    // "https://drive.google.com/file/d/1WvS7nsSh921fbzlW1D0iq1G30Ttwk3cN/view?usp=drive_link",
    // "https://drive.google.com/file/d/1fqsQdSE8gy7hOQDriE8zJzUgw2mLpvdX/view?usp=drive_link",
    // "https://drive.google.com/file/d/16OyEoNc74AmB102cmZLWi8Ca4OmeiJ5Z/view?usp=drive_link",
    // "https://drive.google.com/file/d/1XD20pPHVnI-9uN3wmOsYC_PLWc1Gt6IQ/view?usp=drive_link",
    // "https://drive.google.com/file/d/1N7Tm_onkQuuj67Y-oO_Q1WJJljdGEPlG/view?usp=drive_link",
    // "https://drive.google.com/file/d/1cmVZlmrc0zj1m0dcozI_7PODRar_O-0G/view?usp=drive_link",
    // "https://drive.google.com/file/d/1uZtO7jxvEfQFmwmDNAomvDCWgZwbSCef/view?usp=drive_link",
    // "https://drive.google.com/file/d/1BDnhcgEk0_aVDjgZRgvpzPMBIgKBHSsE/view?usp=drive_link",
    // "https://drive.google.com/file/d/1FMlT1OCkaS7kZRVGU70nDY-SJy-YLfC2/view?usp=drive_link",
    // "https://drive.google.com/file/d/1x4hQ3dgNMq4GasOE97qJd_bbGp7b1uzL/view?usp=drive_link",
    // "https://drive.google.com/file/d/1W25E1XMtTKXfPf5m7w01y3lXuyACYhqL/view?usp=drive_link",
    // "https://drive.google.com/file/d/1LBRlkAdL9zZXGz6B-TmkxMf9cOJecLiB/view?usp=drive_link",
    // "https://drive.google.com/file/d/1uZBarC6INzMpBLbxnZDNtw-kDqnOzhmf/view?usp=drive_link",
    // "https://drive.google.com/file/d/1rdjg-23yV6ciYdD2MpbMDkclS2pzZwqQ/view?usp=drive_link",
    // "https://drive.google.com/file/d/1tWDeVWfy0gTxu02DkAg5ZEdQ57p2XFrz/view?usp=drive_link",
    // "https://drive.google.com/file/d/16JXcMar9nCm1ZG6yqxvd34yFHHV76Kk5/view?usp=drive_link",
    // "https://drive.google.com/file/d/1dRbp1TAAV_E8Lt-WN5yMpsMe8Z8-tIJc/view?usp=drive_link",
    // "https://drive.google.com/file/d/1dRbp1TAAV_E8Lt-WN5yMpsMe8Z8-tIJc/view?usp=drive_link",
    // "https://drive.google.com/file/d/1qi8d2QCqyrhx7lfkFnjQCvydJ-syjZmH/view?usp=drive_link",
    // "https://drive.google.com/file/d/1YuGBcNGBfY4okJHfuXXhCfRO1Ua0g_Z5/view?usp=drive_link",
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
    "../assets/images/Gallery/DSC_0042.jpg",
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

// addImages(imageSrc.uiTeam, uiTeam);


// const addGalleryDivs = function (final = 38, initial = 1) {
//   for (; initial < final; initial++) {
//     const html = `
//     <div class="gallery__item">
//     <img class='gallery__image' src="gallery_images/m--${initial}.jpg" />
//     </div>
//     `;
//     gallery.insertAdjacentHTML("beforeend", html);
//   }
// };
// addGalleryDivs();

// get images src onclick
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