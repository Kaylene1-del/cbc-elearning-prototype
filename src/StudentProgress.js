export default function StudentProgress() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Student Progress</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mathematics</td>
            <td>78%</td>
            <td>Improving</td>
          </tr>
          <tr>
            <td>English</td>
            <td>85%</td>
            <td>Stable</td>
          </tr>
          <tr>
            <td>Kiswahili</td>
            <td>92%</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <td>Science & Tech</td>
            <td>67%</td>
            <td>Needs Attention</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: "20px", color: "#555" }}>
        Overall performance is good. Encourage the student to focus more on Science & Tech.
      </p>
    </div>
  );
}
