"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SavedContext = createContext();

export function SavedProvider({ children }) {
  const [savedOpportunities, setSavedOpportunities] = useState([]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedSaved = localStorage.getItem("savedOpportunities");

      if (storedSaved) {
        setSavedOpportunities(JSON.parse(storedSaved));
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "savedOpportunities",
      JSON.stringify(savedOpportunities)
    );
  }, [savedOpportunities]);

  function saveOpportunity(opportunity) {
    const alreadySaved = savedOpportunities.some(
      (item) => item.id === opportunity.id
    );

    if (!alreadySaved) {
      setSavedOpportunities([...savedOpportunities, opportunity]);
    }
  }

  function removeOpportunity(id) {
    const updatedSaved = savedOpportunities.filter((item) => item.id !== id);
    setSavedOpportunities(updatedSaved);
  }

  function isSaved(id) {
    return savedOpportunities.some((item) => item.id === id);
  }

  return (
    <SavedContext.Provider
      value={{
        savedOpportunities,
        saveOpportunity,
        removeOpportunity,
        isSaved,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  return useContext(SavedContext);
}
