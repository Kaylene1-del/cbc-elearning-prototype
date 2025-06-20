export default function Audio() {
  return (
    <div>
      <h2>Audio Lessons</h2>
      <p>Play or download CBC lessons in audio format:</p>

      {/* Simulated audio playback */}
      <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Simulated download */}
      <div style={{ marginTop: "10px" }}>
        <a
          href="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          download
        >
          <button>Download for Offline</button>
        </a>
      </div>
    </div>
  );
}
