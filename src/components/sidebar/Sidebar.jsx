import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Explore</span>
        <img className='sidebarImg' src="https://render.fineartamerica.com/images/rendered/default/print/24/19/break/images-medium-5/chicago-flag-watercolor-mike-maher.jpg"
          alt=""
        />
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            Food
          </li>
          <li className="sidebarListItem">
            Music
          </li>
          <li className="sidebarListItem">
            Sports
          </li>
          <li className="sidebarListItem">
            Outdoors
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.instagram.com/chicago/"><i className="topIcon fab fa-instagram-square"></i></a>
          <a href="https://www.facebook.com/ChooseChicago/"><i className="topIcon fab fa-facebook-square"></i></a>
        </div>
      </div>
    </div>
  );
}