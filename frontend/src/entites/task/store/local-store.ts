export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Error loading from localStorage:", e);
    return undefined;
  }
};
