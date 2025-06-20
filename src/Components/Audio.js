export default function Audio({ src }) {
  return (
    <div>
      <h3>Audio Lesson</h3>
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
