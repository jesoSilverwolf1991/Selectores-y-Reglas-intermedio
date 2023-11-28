function startProgress() {
    const progressBar = document.getElementById("my-progress-bar");
    let width = 0;
  
  
    const duration = 3000;
    const interval = 10;
    const increment = (100 / (duration / interval));
  
    function updateProgressBar() {
      if (width >= 100) {
        clearInterval(progressInterval);
      } else {
        width += increment;
        progressBar.style.width = width + "%";
        progressBar.innerText = Math.round(width) + "%";
      }
    }
  
    const progressInterval = setInterval(updateProgressBar, interval);
  }
  