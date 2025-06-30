import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PagesNotFound() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h3>Ooppss....</h3>
        <p>Halaman Yang Anda Tuju tidak Ditemukan....</p>
      </div>
      <Footer />
    </>
  );
}

export default PagesNotFound;
