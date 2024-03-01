import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Button, Container, Table, Spinner } from "react-bootstrap";
import CreateCategory from "../components/modals/CreateCategory";
import { fetchCategories as fetchCategoriesAPI } from "../http/deviceAPI";

const AdmCategory = observer(() => {
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetchCategoriesAPI();
                setCategories(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Failed to fetch categories. Please try again.');
                setLoading(false);
            }
        }

        fetchCategories();
    }, []);

    return (
        <Container className="d-flex flex-column">
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Завантаження...</span>
                </Spinner>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Категорія</th>
                                <th>ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(category => (
                                <tr key={category.id}>
                                    <td>{category.name}</td>
                                    <td>{category.id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2"
                        onClick={() => setCategoryVisible(true)}
                    >
                        Додати категорію
                    </Button>
                    <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)} />
                </>
            )}
        </Container>
    );
});

export default AdmCategory;
