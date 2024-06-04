import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import MainLayout from "../components/shared/MainLayout";

function page404() {
  const hanldeSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      {/* <Header /> */}
      <main className="pageof404">
        <h1>
          4
          <span>
            <i class="fas fa-ghost"></i>
          </span>
          4
        </h1>
        <h2>Error: 404 page not found</h2>
        <p>Sorry, the page you're looking for cannot be accessed</p>
      </main>

      <Footer />
    </>
  );
}

export default page404;
