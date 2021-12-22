import "./style.scss";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Shopping from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <section className="firstline">
        <Avatar
          alt="logo"
          src="https://source.unsplash.com/random/400x200"
          sx={{ width: 100, height: 100 }}
        />
        <div className="ads">Advertisement</div>
        <Button startIcon={<Shopping />}>Shopping Cart</Button>
        <Button>Account Management</Button>
      </section>
      <section className="secondline">
        <span>Gendre</span>
        <Link to="/">New Title</Link>
        <Link to="/">What's Popular</Link>
        <Link to="/">Bargin</Link>
        <Link to="/">Gifts</Link>
        <label>
          <input type="input" />
          <Button>Search</Button>
        </label>
      </section>
    </header>
  );
}

export default Header;
