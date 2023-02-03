const likeContainers = document.querySelectorAll(".like-container");

likeContainers.forEach(likeContainer => {
  likeContainer.addEventListener("click", function() {
    const likeCount = likeContainer.querySelector(".like-count");
    let likeCountValue = parseInt(likeCount.innerHTML, 10);
    likeCountValue++;
    likeCount.innerHTML = likeCountValue;
  });
});

const DislikeContainers = document.querySelectorAll(".dislike-container");

DislikeContainers.forEach(likeContainer => {
  likeContainer.addEventListener("click", function() {
    const DislikeCount = likeContainer.querySelector(".dislike-count");
    let DislikeCountValue = parseInt(DislikeCount.innerHTML, 10);
    DislikeCountValue++;
    DislikeCount.innerHTML = DislikeCountValue;
  });
});

const HeartContainers = document.querySelectorAll(".heart-container");

HeartContainers.forEach(likeContainer => {
  likeContainer.addEventListener("click", function() {
    const HeartCount = likeContainer.querySelector(".heart-count");
    let  HeartCountValue = parseInt(DislikeCount.innerHTML, 10);
   HeartCountValue++;
    HeartCount.innerHTML =  HeartCountValue;
  });
});



const likeContainer = document.querySelector('.like-container');
const dislikeContainer = document.querySelector('.dislike-container');
const heartContainer = document.querySelector('.heart-container');

likeContainer.addEventListener('click', function () {
  likeContainer.classList.toggle('selected');
  dislikeContainer.classList.remove('selected');
  heartContainer.classList.remove('selected');
});

dislikeContainer.addEventListener('click', function () {
  dislikeContainer.classList.toggle('selected');
  likeContainer.classList.remove('selected');
  heartContainer.classList.remove('selected');
});

heartContainer.addEventListener('click', function () {
  heartContainer.classList.toggle('selected');
  likeContainer.classList.remove('selected');
  dislikeContainer.classList.remove('selected');
});

/*const likeContainerz = document.querySelector('.like-container');
const dislikeContainerz = document.querySelector('.dislike-container');
const heartContainerz = document.querySelector('.heart-container');
let isLikeSelected = false;
let isDislikeSelected = false;
let isHeartSelected = false;

likeContainerz.addEventListener('click', function () {
  isLikeSelected = !isLikeSelected;
  likeContainerz.classList.toggle('selected', isLikeSelected);
  dislikeContainerz.classList.remove('selected');
  isDislikeSelected = false;
  heartContainerz.classList.remove('selected');
  isHeartSelected = false;
});

dislikeContainerz.addEventListener('click', function () {
  isDislikeSelected = !isDislikeSelected;
  dislikeContainerz.classList.toggle('selected', isDislikeSelected);
  likeContainerz.classList.remove('selected');
  isLikeSelected = false;
  heartContainerz.classList.remove('selected');
  isHeartSelected = false;
});

heartContainerz.addEventListener('click', function () {
  isHeartSelected = !isHeartSelected;
  heartContainerz.classList.toggle('selected', isHeartSelected);
  likeContainerz.classList.remove('selected');
  isLikeSelected = false;
  dislikeContainerz.classList.remove('selected');
  isDislikeSelected = false;
};*/




  