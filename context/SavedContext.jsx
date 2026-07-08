"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/context/ToastContext";

const SavedContext = createContext();

export function SavedProvider({ children }) {
  const [savedOpportunities, setSavedOpportunities] = useState([]);
  const { showToast } = useToast();

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
      showToast("Opportunity saved successfully.");
    } else {
      showToast("This opportunity is already saved.", "info");
    }
  }

  function removeOpportunity(id) {
    const updatedSaved = savedOpportunities.filter((item) => item.id !== id);
    setSavedOpportunities(updatedSaved);
    showToast("Opportunity removed from saved list.", "info");
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
