import MainData from "."
import Sidebar from ".../Components/Sidebar/Sidebar";

function Home() {
  return (
    <>
      <div>
        <Sidebar />
        <MainData />
      </div>
    </>
  );
}

export default Home;