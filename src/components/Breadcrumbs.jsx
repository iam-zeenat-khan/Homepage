import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="bg-light-pink p-4 rounded-lg mb-4">
      <ul className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="text-deep-purple">
            <Link to={item.path} className="hover:text-dark-purple transition-colors duration-300">
              {item.label}
            </Link>
            {index < items.length - 1 && <span className="text-muted-purple"> &gt; </span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
