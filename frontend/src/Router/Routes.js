import { BrowserRouter, Route } from 'react-router-dom';
import Restaurant from '../Admin/create/restaurant';
import Details from '../Details/Details';

export function Routes() {
    return (
        <BrowserRouter>
            <Route component={Details} path="/details" />
            <Route component={Restaurant} path="/admin/restaurant" />
        </BrowserRouter>
    )
}