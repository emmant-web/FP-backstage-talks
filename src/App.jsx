import FixedCornerDetails from "./components/FixedCornerDetails";
import IssueSection from "./components/IssueSection";
import { issues } from "./data/issues";

function App() {
  return <div className="h-screen">
      {issues.map((issue) => {
        <IssueSection
        key={issue.id}
        />
      })}
    <FixedCornerDetails/>
  </div>;
}

export default App;
