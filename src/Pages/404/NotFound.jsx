import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="absolute bgWhite">
      <section class="page_404">
        <div class="four_zero_four_bg">
          <h1 class="text-center ">404</h1>
        </div>

        <div class="contant_box_404 flex flex-col items-center">
          <h3 class="h2">Looks like you're lost</h3>

          <p>The page you are looking for, is not available!</p>

          <Link to="/" class="link_404">
            Go to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
