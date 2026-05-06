import { useEffect } from "react";
import { Log } from "../api/logger";

function Home() {

  useEffect(() => {

    Log(
      "frontend",
      "info",
      "page",
      "Home page loaded successfully"
    );

  }, []);

  return (
    <div>
      <h1>Logging Middleware Working</h1>
    </div>
  );
}

export default Home;