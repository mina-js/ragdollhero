import "./App.css";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/ragdoll3.loader.js",
    dataUrl: "Build/ragdoll3.data",
    frameworkUrl: "Build/ragdoll3.framework.js",
    codeUrl: "Build/ragdoll3.wasm",
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}

export default App;
