export function useWishlist() {
  const wishList = () =>
    (process.client && JSON.parse(localStorage.getItem("wish-list"))) || [];

  const updateWishList = (value) =>
    localStorage.setItem("wish-list", JSON.stringify(value));

  const inWishList = (id) => wishList().find((i) => i === id);

  const setWishList = (currencyId) => {
    if (inWishList(currencyId)) {
      console.log("Removing", currencyId);

      updateWishList(wishList().filter((i) => i != currencyId));
    } else {
      console.log("Adding", currencyId);
      updateWishList([...wishList(), currencyId]);
    }
  };

  return { wishList, inWishList, setWishList };
}
