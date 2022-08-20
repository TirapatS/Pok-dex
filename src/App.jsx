import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
  return (
		<div>

			<Routes>
				<Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
			</Routes>

		</div>
  )
}

export default App
