import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function GnbLink({to, children}) {
  return (
    <Nav.Link
    as={NavLink}
    to={to}
    className="gnb_link"
    >
      {children}
    </Nav.Link>
  );
}