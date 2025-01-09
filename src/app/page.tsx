import "bootstrap/dist/css/bootstrap.min.css";
// src/pages/index.js
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-black ">
        <div className="d-flex align-items-center justify-content-center gap-4 bg-white pe-4">
          <img
            src="/assets/images/logo.jpeg" // Correct path to the image in the public folder
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "100px", height: "auto" }} // Optional styling to control the size
          />
          <h1 className="display-1 fw-bold mb-1">SanHashira</h1>
        </div>
        <div className="d-flex align-items-center justify-content-center w-100">
          <p className="text-white fw-bold text-center w-100">
            Coming Soon for Three Foundations
          </p>
        </div>
        <hr className="border-white" />
      </main>
    </div>
  );
}
