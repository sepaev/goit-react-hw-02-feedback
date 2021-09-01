import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";

function App() {
  return (
    <div>
      <Feedback />
      <Statistics good={0} neutral={0} />
    </div>
  );
}

export default App;
