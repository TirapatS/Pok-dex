import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.css';

import './assets/css/App.css'

function App() {
  return (
	<div>
      <Nav /> {/* Nav component */}

		{/* Routes */}
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<NotFound />} /> {/* if anything is typed in the url that does not exists, show user notfound page. Can be redirected to HomePage when clicked on Pokedex*/}
		</Routes>

	</div>
  )
}

export default App
