// CreateProcedure.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { createProcedure, fetchCategories } from '../../http/deviceAPI';

const CreateProcedure = ({ show, onHide }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategoriesData();
  }, []);

  const addProcedure = () => {
    createProcedure({ name, description, price, category_id: selectedCategory }).then((data) => {
      setName('');
      setDescription('');
      setPrice('');
      setSelectedCategory('');
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Додати процедуру</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formProcedureName">
            <Form.Label>Назва</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введіть назву процедури"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formProcedureDescription">
            <Form.Label>Опис</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введіть опис процедури"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formProcedurePrice">
            <Form.Label>Вартість</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введіть вартість процедури"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formProcedureCategory">
            <Form.Label>Категорія</Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Обрати категорію</option>
              {categories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                  {category.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Скасувати
        </Button>
        <Button variant="primary" onClick={addProcedure}>
          Зберегти
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProcedure;
