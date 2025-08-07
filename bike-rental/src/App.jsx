import {BrowserRouter, Route, Routes} from 'react-router'

import Bookings from './pages/Bookings'
import AppLayout from './components/Ui/AppLayout'


function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route element={<AppLayout />}>
        
        <Route path='booking' element={<Bookings/>} />
        </Route>
        </Routes>
        </BrowserRouter>
     
    )
}

export default App