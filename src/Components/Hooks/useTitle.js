import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Fly With Me - ${title}`;
  }, [title]);
};

export default useTitle;
