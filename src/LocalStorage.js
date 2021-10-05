import { useState, useEffect } from "react";

function useLocalStorage(wishList) {
  const [wishSaved, setWishSaved] = useState(-1);

  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishList));
    setWishSaved((savedWishes) => savedWishes + 1);
  }, [wishList]);
  return wishSaved;
}

export default useLocalStorage;
