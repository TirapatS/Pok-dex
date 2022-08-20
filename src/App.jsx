import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.css';

import './assets/css/App.css'

function App() {
  return (
		<div>
      <Nav />

			<Routes>
				<Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
			</Routes>

		</div>
  )
}

export default App
