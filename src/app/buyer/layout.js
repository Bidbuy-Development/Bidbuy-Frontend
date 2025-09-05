import BuyerLayout from "../../components/Buyer/BuyerLayout";

const Layout = ({ products, cart }) => {
  return (
    <BuyerLayout>
      <main className="min-h-screen flex justify-center items-center">
        <div className="flex-1 grid grid-cols-[2fr_1fr] gap-4">
          <section className="space-y-6">{products}</section>
          <aside>{cart}</aside>
        </div>
      </main>
    </BuyerLayout>
  );
};

export default Layout;
