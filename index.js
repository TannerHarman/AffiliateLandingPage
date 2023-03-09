const root = document.querySelector(':root');
const rootStyles = getComputedStyle(document.querySelector(':root'));


videoContainer.addEventListener('click', () => {
  const video = document.getElementById('vid');
  const videoContainer = document.getElementById('videoContainer');
  const opacityValue = rootStyles.getPropertyValue('--opacity');

  video.paused ? video.play() : video.pause();
  opacityValue == 1 ? root.style.setProperty('--opacity', 0) : root.style.setProperty('--opacity', 1);
})