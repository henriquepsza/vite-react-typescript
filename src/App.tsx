import { useEffect, useState } from "react";
import ResponsiveDrawer from "./pages/ResponsiveDrawer.tsx";

function App() {
  const [versions, setVersions] = useState({
    node: "",
    chrome: "",
    electron: "",
    ping: "",
  });

  useEffect(() => {
    if (window.versions) {
      setVersions({
        node: window.versions.node(),
        chrome: window.versions.chrome(),
        electron: window.versions.electron(),
        ping: "",
      });

      window.versions.ping().then((response) => {
        setVersions((prev) => ({ ...prev, ping: response }));
      });
    }
  }, []);

  const isElectron =
    typeof window !== "undefined" &&
    window.versions &&
    window.versions.electron;

  return (
    <div>
      {isElectron && <ResponsiveDrawer />}
      {isElectron && (
        <div>
          <p>Running in Electron</p>
          <p>Node version: {versions.node}</p>
          <p>Chrome version: {versions.chrome}</p>
          <p>Electron version: {versions.electron}</p>
          <p>Ping response: {versions.ping}</p>
        </div>
      )}
    </div>
  );
}

export default App;
