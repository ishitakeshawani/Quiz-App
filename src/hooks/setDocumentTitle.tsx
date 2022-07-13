import { useEffect } from "react";

export const setDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};
