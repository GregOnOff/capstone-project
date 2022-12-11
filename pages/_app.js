import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import { getAllWishlistItems } from "../dummy-data";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [itemData, setItemData] = useLocalStorage("data", {
    wishlistItems: getAllWishlistItems(),
    savings: 0,
    deletedItems: [],
  });
  useEffect(() => {
    const actualTime = new Date();
    itemData.wishlistItems.map((item) => {
      return new Date(item.date);
    });
    console.log(
      itemData.wishlistItems.map((item) => {
        const nD = new Date();
        nD.setUTCMilliseconds(new Date(item.date) - new Date());
        return nD;
      })
    );
  }, [itemData]);

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          itemData={itemData}
          setItemData={setItemData}
        />
      </Layout>
    </>
  );
}

export default MyApp;
