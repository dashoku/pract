import {Container} from "react-bootstrap";
import AdmCategory from "./AdmCategory";
import AdmProcedure from "./AdmProcedure";

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
           <AdmCategory/>
            <AdmProcedure/>
        </Container>
    );
};

export default Admin;
