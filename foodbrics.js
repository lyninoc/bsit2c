let likeCount = 0;
    let heartCount = 0;
    let hahaCount = 0;
    let sadCount = 0;
    let angryCount = 0;

    // Function to add reactions
    function addReaction(reaction) {
      switch (reaction) {
        case 'like':
          likeCount++;
          document.getElementById('likeCount').innerText = likeCount;
          break;
        case 'heart':
          heartCount++;
          document.getElementById('heartCount').innerText = heartCount;
          break;
        case 'haha':
          hahaCount++;
          document.getElementById('hahaCount').innerText = hahaCount;
          break;
        case 'sad':
          sadCount++;
          document.getElementById('sadCount').innerText = sadCount;
          break;
        case 'angry':
          angryCount++;
          document.getElementById('angryCount').innerText = angryCount;
          break;
        default:
          break;
      }
    }



function toggleLike(postId) {
    var likeButton = document.getElementById('likeButton');
    likeButton.classList.toggle('liked');
}

function shareContent() {
    
    
   
    navigator.clipboard.writeText(contentToShare)
        .then(function() {
            // Clipboard write successful, perform sharing action
            alert('Content copied to clipboard. Now you can perform the sharing action.');
            // Replace the following line with your actual sharing logic, e.g., open a new tab with a share URL
            // window.open('your_share_url', '_blank');
        })
        .catch(function(err) {
            // Handle errors
            console.error('Unable to copy to clipboard', err);
        });
}
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');
    const newComment = document.createElement('li');
    newComment.textContent = commentInput.value;
    commentsList.appendChild(newComment);
    commentInput.value = ''; // Clear the input after adding a comment
  }