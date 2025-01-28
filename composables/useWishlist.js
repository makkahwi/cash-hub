import { ref, watchEffect } from "vue";

export function useWishlist() {
  const wishList = ref([]);

  // ✅ Load wishlist from localStorage on mount (only on client-side)
  const loadWishlist = () => {
    if (process.client) {
      const savedWishList = localStorage.getItem("wish-list");
      wishList.value = savedWishList ? JSON.parse(savedWishList) : [];
    }
  };

  loadWishlist(); // Initialize the list

  // ✅ Sync changes to localStorage whenever wishList changes
  watchEffect(() => {
    if (process.client) {
      localStorage.setItem("wish-list", JSON.stringify(wishList.value));
    }
  });

  // ✅ Check if an item exists in the wishlist
  const inWishList = (id) => wishList.value.includes(id);

  // ✅ Add or Remove an item from the wishlist
  const setWishList = (currencyId) => {
    if (inWishList(currencyId)) {
      console.log("Removing", currencyId);
      wishList.value = wishList.value.filter((i) => i !== currencyId);
    } else {
      console.log("Adding", currencyId);
      wishList.value.push(currencyId);
    }
  };

  return { wishList, inWishList, setWishList };
}
