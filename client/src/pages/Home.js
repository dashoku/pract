
import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";

import HomePage from "../components/HomePage";
import AboutUs from "../components/AboutUs";
//import {fetchCategories, fetchProcedures} from "../http/deviceAPI";
import './stylepages.css';

const Shop = observer(() => {
   /* const { device } = useContext(Context);

    useEffect(() => {
        // Fetch categories and set them in device store
        fetchCategories().then(data => device.setCategories(data));
        
        // Fetch procedures and set them in device store
        fetchProcedures(null, 1, 2).then(data => {
            device.setProcedures(data.rows);
            device.setTotalProcedureCount(data.count);
        });
    }, [device]);

    useEffect(() => {
        // Fetch procedures based on selected category, type, brand, and page
        fetchProcedures(device.selectedCategory.id, device.page, 2).then(data => {
            device.setProcedures(data.rows);
            device.setTotalProcedureCount(data.count);
        });
    }, [device.page, device.selectedCategory, device]);
*/
    return (
        <Container>
           <HomePage/>
           <AboutUs/>
        </Container>
    );
});

export default Shop;
