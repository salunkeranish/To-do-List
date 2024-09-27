document.getElementById("asyncButton").addEventListener("click", async function() {
  document.getElementById("asyncResult").innerText = "Loading...";

  try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch('https://dummyjson.com/posts', { signal: controller.signal });
      const data = await response.json();

      clearTimeout(timeoutId);

      let posts = data.posts.map(post => post.title).join('<br>');
      document.getElementById("asyncResult").innerHTML = posts;
  } catch (error) {
      document.getElementById("asyncResult").innerText = error.name === 'AbortError' ? 'Operation timed out' : error.message;
  }
});
