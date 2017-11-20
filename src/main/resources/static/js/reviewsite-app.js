//Change fontsize of text on hover
var reviewContent = document.querySelectorAll('.reviewContent');

  for (var i = 0; i < reviewContent.length; i++) {
    reviewContent[i].addEventListener('mouseover', function() {
      this.style.fontSize = '110%';
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
  var commentNum = 0;

  submitComment.onclick = function(){
    commentNum = commentNum + 1;
    var userComment = document.getElementById('commentField').value;
    var userName = document.getElementById('userName').value;
    var commentsSection = document.getElementById('comments');
    var commentDiv = document.createElement('div');
    const commentTemplate =`
    <p>${userName} says...</p>
    <p>${userComment}</p>
    `;
    // commentDiv.className = 'commentNum' + commentNum;
    commentDiv.id = "commentNum" + commentNum;
    commentDiv.innerHTML = commentTemplate;
    var deleteCommentButton = document.createElement('button');
    deleteCommentButton.id = 'commentNum' + commentNum;
    deleteCommentButton.innerText = 'Delete Comment';
    deleteCommentButton.onclick = function deleteComment(){
      if(confirm("Are you sure you want to delete that comment?")){
        var commentToDelete = document.getElementById(this.id);
        commentToDelete.parentNode.removeChild(commentToDelete);
      }
    }
    commentsSection.appendChild(commentDiv);
    commentDiv.appendChild(deleteCommentButton);
    commentModal.style.display = "none";
  }

  //Confirm for delete tag Button
  var removeTagButton = document.getElementById('removeTagButton');

  removeTagButton.onclick = function() {
    if(!confirm("Are you sure you want to remove this tag?")){
      removeTagButton.setAttribute('th:formaction', '@{/remove-tag-cancelled(id=${review.id})}');
    }
}
