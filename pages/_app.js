import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useLocalStorage } from "../helpers/hooks";
import { getAllWishlistItems } from "../dummy-data";

function MyApp({ Component, pageProps }) {
  const [itemData, setItemData] = useLocalStorage("data", {
    wishlistItems: getAllWishlistItems(),
  });

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
