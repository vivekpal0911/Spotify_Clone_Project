// Mock data for songs
const songs = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "blind.jpg"
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      image: "https://i.scdn.co/image/ab67616d0000b273401bfafae85b3e46800b9e0b"
    },
    {
      title: "Save Your Tears",
      artist: "The Weeknd",
      image: "https://i.scdn.co/image/ab67616d0000b273f34c72a3c6ee9d4f0ea704d9"
    }
  ];
  
  // Track state
  let currentSongIndex = 0;
  let isPlaying = false;
  
  // Get DOM elements
  const playButton = document.getElementById("play-btn");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  const trackTitle = document.getElementById("track-title");
  const trackArtist = document.getElementById("track-artist");
  const trackImage = document.getElementById("track-img");
  
  // Update the track info
  function updateTrack() {
    trackTitle.textContent = songs[currentSongIndex].title;
    trackArtist.textContent = songs[currentSongIndex].artist;
    trackImage.src = songs[currentSongIndex].image;
  }
  
  // Play/Pause functionality
  playButton.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      playButton.textContent = "⏸"; // Pause icon
    } else {
      playButton.textContent = "⏯"; // Play icon
    }
  });
  
  // Next Song
  nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateTrack();
    if (isPlaying) {
      playButton.textContent = "⏸"; // Change to pause button
    }
  });
  
  // Previous Song
  prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateTrack();
    if (isPlaying) {
      playButton.textContent = "⏸"; // Change to pause button
    }
  });
  
  // Initial track update
  updateTrack();
  