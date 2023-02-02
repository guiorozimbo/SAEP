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





  
  