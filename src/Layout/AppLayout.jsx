import { Link, Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import Marquee from "react-fast-marquee";

const AppLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && user?.email && (
        <Marquee
          pauseOnHover={true}
          gradient={true}
          className="bg-primary text-base-100"
        >
          Welcome Mr. {user?.displayName} 🐦‍🔥. Lets unleash the power of
          PicSeek-AI
        </Marquee>
      )}
      <header className="bg-gradient-to-t lg:bg-gradient-to-l from-cyan-100 ">
        <nav className="md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="min-h-[calc(100svh-125px)]">
        <Outlet></Outlet>
      </main>

      <footer className="footer footer-center bg-cyan-50 glass text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by PIC-SEEK-AI
          </p>
          <Link to="/" className="flex items-center gap-1 text-xl ">
          <span className="bg-gradient-to-r from-stone-300 to-cyan-600 bg-clip-text text-transparent">
            PIC-SEEK
          </span>
          <div>
            <img
              src="https://img.icons8.com/?size=96&id=8gR77jBNhfyz&format=png"
              alt=""
              width={20}
            />
          </div>
          <span className="text-cyan-600">AI</span>
        </Link>
        </aside>
      </footer>
    </>
  );
};

export default AppLayout;
