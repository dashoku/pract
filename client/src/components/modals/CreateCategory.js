import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { createCategory } from '../../http/deviceAPI';

const CreateCategory = ({ show, onHide }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const addCategory = () => {
    createCategory({ name, description }).then(() => {
      setName('');
      setDescription('');
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Додати категорію</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCategoryName">
            <Form.Label>Назва</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введіть назву категорії"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formCategoryDescription">
            <Form.Label>Опис</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введіть опис категорії"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Скасувати
        </Button>
        <Button variant="primary" onClick={addCategory}>
          Зберегти
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCategory;
