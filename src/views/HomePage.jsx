import CardStores from "../components/CardStores";

function Home() {
  return (
    <div>
      <div className="mt-4 p-3">
        <h1>Home Page</h1>
      </div>

      <div>
        <CardStores />
      </div>
    </div>
  );
}

export default Home;