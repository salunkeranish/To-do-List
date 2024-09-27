document.getElementById("promiseButton").addEventListener("click", function() {
  document.getElementById("promiseResult").innerText = "Loading...";

  new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("Operation timed out")), 5000);

      fetch('https://dummyjson.com/posts')
          .then(response => response.json())
          .then(data => {
              clearTimeout(timer);
              resolve(data.posts.map(post => post.title).join('<br>'));
          })
          .catch(err => reject(err));
  })
  .then(result => document.getElementById("promiseResult").innerHTML = result)
  .catch(err => document.getElementById("promiseResult").innerText = err.message);
});
