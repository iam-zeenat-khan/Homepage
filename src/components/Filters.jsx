import React from 'react';
import { Form } from 'react-bootstrap';

const Filters = ({ news, setFilteredNews }) => {
  const handleFilter = (e) => {
    const category = e.target.value;
    if (category === 'All') {
      setFilteredNews(news);
    } else {
      const filtered = news.filter((item) => item.category === category);
      setFilteredNews(filtered);
    }
  };

  return (
    <Form className="mb-3">
      <Form.Group>
        <Form.Label>Filter by Category</Form.Label>
        <Form.Control as="select" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Business">Business</option>
          <option value="Health">Health</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Filters;
