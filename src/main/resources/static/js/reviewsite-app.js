//Change fontsize of text on hover
var reviewContent = document.querySelectorAll('.reviewContent');

  for (var i = 0; i < reviewContent.length; i++) {
    reviewContent[i].addEventListener('mouseover', function() {
      this.style.fontSize = '200%';
    });
    reviewContent[i].addEventListener('mouseout', function() {
      this.style.fontSize = '100%';
    });
  }

//Change text in footer on click
var copyrightText = document.querySelector('footer p');

  copyrightText.addEventListener('click', function(){
    if(this.innerText !== "Made by Your Name"){
      this.innerText = "Made by Your Name"
    }else{
      this.innerText = "Copyright 2017"
    }
  })



//Display and closing comment modal
var commentModal = document.querySelector('.commentModal');
var commentButton = document.getElementById('commentButton');
var closeModal = document.getElementsByClassName('close')[0];

  //Display modal when user clicks 'comment' button
  commentButton.onclick = function() {
      commentModal.style.display = "block";
  }

  //Close the modal when the user clicks the x
  closeModal.onclick = function() {
      commentModal.style.display = "none";
  }

  //Close modal when user clicks outside of it
  window.onclick = function(event) {
      if (event.target == commentModal) {
          commentModal.style.display = "none";
      }
  }


  //Make comment form add comment to review
  var submitComment = document.querySelector('#submitComment');

  submitComment.onclick = function(){
    var userComment = document.getElementById('commentField').value;
    var userName = document.getElementById('userName').value;
    var commentsSection = document.getElementById('comments');
    var commentDiv = document.createElement('div');
    const commentTemplate =`
    <p>${userName} says...</p>
    <p>${userComment}</p>
    <button id='deleteComment'>Delete Comment</button>
    `;
    commentsSection.appendChild(commentDiv);
    commentDiv.innerHTML = commentTemplate;
    commentModal.style.display = "none";
  }


//Make 'delete comment' button delete comment
  var deleteCommentButton = document.querySelector('.comments div button')
  deleteCommentButton.onclick = deleteCommentButton.parentElement.parentElement.removeChild(deleteCommentButton.parentParentElement);
