const img_src = [
  "./images/aus1.jpeg",
  "./images/aus2.jpeg",
  "./images/korea1.jpeg",
  "./images/korea5.jpeg",
  "./images/malaysia1.jpeg",
  "./images/malaysia5.jpeg",
  "./images/maldives1.jpeg",
  "./images/maldives4.jpeg",
];
let num = -1;

function slide_time() {
  if (num === 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide_img").src = img_src[num];
}

setInterval(slide_time, 1300);
