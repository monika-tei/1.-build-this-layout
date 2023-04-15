import CTA from "./CTA";
import { Logo } from "./Logo";

export function Navigation() {
  return (
    <div className="nav-container">
      <Logo />
      <nav className="nav-bar">
        <a href="#">Who we are </a>
        <a href="#">The problems </a>
        <a href="#">Our Services </a>
        <a href="#">testimonials </a>
      </nav>
      <CTA />
    </div>
  );
}
