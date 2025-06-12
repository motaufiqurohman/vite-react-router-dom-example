import { useEffect, useState } from "react";

const useDarkMode = () => {
  // Initialize `isDarkMode` state based on the user's current system theme preference
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    // Create a MediaQueryList object to track changes to the user's color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Event handler that updates the `isDarkMode` state when the system theme changes
    const handleChange = (e) => setIsDarkMode(e.matches); // true if dark mode, false if light mode

    // Attach the listener to respond to theme changes in real time
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup function to remove the event listener when the component unmounts
    // This prevents memory leaks and ensures the event handler
    // does not run after the component is no longer mounted.
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isDarkMode;
};

export default useDarkMode;
