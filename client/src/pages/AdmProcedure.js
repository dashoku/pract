import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Button, Container, Table, Spinner } from "react-bootstrap";
import CreateProcedure from "../components/modals/CreateProcedure";
import { fetchProcedures } from "../http/deviceAPI";

const AdmProcedure = observer(() => {
    const [procedureVisible, setProcedureVisible] = useState(false);
    const [procedures, setProcedures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProceduresData() {
            try {
                const response = await fetchProcedures();
                setProcedures(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching procedures:', error);
                setError('Failed to fetch procedures. Please try again.');
                setLoading(false);
            }
        }

        fetchProceduresData();
    }, []);

    return (
        <Container className="d-flex flex-column">
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Procedure Name</th>
                                <th>ID</th>
                                {/* Add more table headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {procedures.map(procedure => (
                                <tr key={procedure.id}>
                                    <td>{procedure.name}</td>
                                    <td>{procedure.id}</td>
                                    {/* Add more table data cells as needed */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2"
                        onClick={() => setProcedureVisible(true)}
                    >
                        Add Procedure
                    </Button>
                    <CreateProcedure show={procedureVisible} onHide={() => setProcedureVisible(false)} />
                </>
            )}
        </Container>
    );
});

export default AdmProcedure;
