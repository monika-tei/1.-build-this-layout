import { Left } from "./Left";
import { Right } from "./Right";

export function Main() {
  return (
    <div className="grid-outer">
      <div className="grid-container">
        <Left />
        <Right />
      </div>
    </div>
  );
}
