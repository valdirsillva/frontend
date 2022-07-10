import { BrowserRouter, Route } from 'react-router-dom';
import Details from '../Details/Details';

export function Routes() {
    return (
        <BrowserRouter>
            <Route component={Details} path="/details" />
        </BrowserRouter>
    )
}