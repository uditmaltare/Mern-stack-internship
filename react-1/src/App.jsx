import Header from "./component/Header"
import Sidebar from "./component/Sidebar"
import Mainpage from "./component/Mainpage"
import Footer from "./component/Footer"

function App() {
  return (
    <>
      <Header />
      <div className="flex">

        <Sidebar />
        <Mainpage />
      </div>
      <Footer />

    </>
  )
}
export default App