export default function TeacherView() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Teacher Dashboard</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Average Score</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Faith M.</td>
            <td>80%</td>
            <td>Good performance. Keep monitoring Science.</td>
          </tr>
          <tr>
            <td>James O.</td>
            <td>67%</td>
            <td>Needs support in Mathematics.</td>
          </tr>
          <tr>
            <td>Amina K.</td>
            <td>91%</td>
            <td>Excellent progress across all subjects.</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: "20px", color: "#555" }}>
        View subject-specific trends and offer tailored support where needed.
      </p>
    </div>
  );
}
