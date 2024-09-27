document.getElementById("callbackButton").addEventListener("click", function() {
  setTimeout(function() {
      document.getElementById("callbackResult").innerText = "Callback executed after 5 seconds";
  }, 5000);
});
document.getElementById("callbackButton").addEventListener("click", function() {
  setTimeout(function() {
      fetch('https://dummyjson.com/posts')
          .then(response => response.json())
          .then(data => {
              let posts = data.posts.map(post => post.title).join('<br>');
              document.getElementById("callbackResult").innerHTML = `Callback executed after 5 seconds<br>${posts}`;
          });
  }, 5000);
});
