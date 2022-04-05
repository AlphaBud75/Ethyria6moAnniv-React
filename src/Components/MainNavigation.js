import {Link} from 'react-router-dom';

export default function MainNavigation() {
  return (
    <header>
      <div>div content
      </div>
        <nav>
          <ul>
            <li>
              <Link to="/"> somelinks </Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}
