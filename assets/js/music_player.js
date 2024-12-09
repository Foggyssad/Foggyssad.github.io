const API_KEY = 'AIzaSyAeqybXaTJadKErSs24y8IugBp6Ro3M-zw';
const CHANNEL_ID = 'UC4l_oRpMe2WljRHqgOo851w';
const VIDEO_LIST_LIMIT = 10; // Number of videos to fetch

// Load the YouTube Iframe API
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    height: '315',
    width: '560',
    videoId: '', // No video initially loaded
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// Function to fetch videos from YouTube API
async function fetchVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=${VIDEO_LIST_LIMIT}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items) {
      displayVideoList(data.items);
    } else {
      console.error("No videos found.");
    }
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
  }
}

// Function to display the list of videos
function displayVideoList(videos) {
  const videoListContainer = document.getElementById('video-list');
  videoListContainer.innerHTML = '';

  videos.forEach(video => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');
    videoItem.innerHTML = `
      <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
      <p>${video.snippet.title}</p>
    `;
    videoItem.onclick = () => playVideo(video.id.videoId);
    videoListContainer.appendChild(videoItem);
  });
}

// Function to play the selected video
function playVideo(videoId) {
  player.loadVideoById(videoId);
}

// Handle the YouTube player ready event
function onPlayerReady(event) {
  console.log("YouTube Player is ready.");
}

// Handle state changes
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    console.log("Video is playing");
  }
}

// Fetch videos when the page loads
window.onload = fetchVideos;