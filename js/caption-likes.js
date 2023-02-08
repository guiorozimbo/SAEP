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



/*const likeContainersz = document.querySelectorAll('.like-container');
const dislikeContainers = document.querySelectorAll('.dislike-container');
const heartContainers = document.querySelectorAll('.heart-container');

const toggleSelected = (element, className) => {
  element.classList.toggle(className);
};

const removeSelected = (element, className) => {
  element.classList.remove(className);
};

likeContainersz.forEach(container => {
  container.addEventListener('click', function () {
    toggleSelected(container, 'selected');
    dislikeContainers.forEach(dislikeContainer => removeSelected(dislikeContainer, 'selected'));
    heartContainers.forEach(heartContainer => removeSelected(heartContainer, 'selected'));
  });
});

dislikeContainers.forEach(container => {
  container.addEventListener('click', function () {
    toggleSelected(container, 'selected');
    likeContainersz.forEach(likeContainer => removeSelected(likeContainer, 'selected'));
    heartContainers.forEach(heartContainer => removeSelected(heartContainer, 'selected'));
  });
});

heartContainers.forEach(container => {
  container.addEventListener('click', function () {
    toggleSelected(container, 'selected');
    likeContainersz.forEach(likeContainer => removeSelected(likeContainer, 'selected'));
    dislikeContainers.forEach(dislikeContainer => removeSelected(dislikeContainer, 'selected'));
  });
});*/

const buttons = document.querySelectorAll(".fa-thumbs-up");

let liked = false;
let disliked = false;
let hearted = false;

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const container = this.parentNode;
    const count = container.querySelector(".like-count");
    const counti = container.querySelector(".dislike-count");
    const countin = container.querySelector(".dislike-count");

    if (container.classList.contains("like-container")) {
      if (!liked) {
        container.classList.add("liked");
        liked = true;
        disliked = false;
        hearted = false;
        count.innerHTML = parseInt(count.innerHTML) ;
      } 
      else {
        container.classList.remove("liked");
        liked = false;
        count.innerHTML = parseInt(count.innerHTML) - 1;
      }
    }

    else if (container.classList.contains("dislike-container")) {
      if (!disliked) {
        container.classList.add("disliked");
        disliked = true;
        liked = false;
        hearted = false;
        counti.innerHTML = parseInt(counti.innerHTML) ;
      } else {
        container.classList.remove("disliked");
        disliked = false;
        counti.innerHTML = parseInt(counti.innerHTML) - 1;
      }
    } 
    else if (container.classList.contains("heart-container")) {
      if (!hearted) {
        container.classList.add("hearted");
        hearted = true;
        liked = false;
        disliked = false;
        countin.innerHTML = parseInt(countin.innerHTML) ;
      } else {
        container.classList.remove("hearted");
        hearted = false;
        countin.innerHTML = parseInt(countin.innerHTML) - 1;
      }
    }
  });
});





  