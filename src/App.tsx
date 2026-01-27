import { CopilotKit } from "@copilotkit/react-core";
import YourMainContent from './page'
import './index.css'
import "@copilotkit/react-ui/styles.css";

function App() {
  return (
    <CopilotKit runtimeUrl="http://localhost:4000/api/copilotkit" agent="my_agent">
          <YourMainContent />
    </CopilotKit>
  )
}

export default App
