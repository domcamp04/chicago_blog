import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./HomePage.css";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts />
      </div>
    </>
  );
}