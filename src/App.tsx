import './App.scss'
import { Button, Container, Row, Col, Card, FormControl, FormGroup, FormLabel, Form } from 'react-bootstrap'
import { NavigationBar } from '~/components/Navbar/Navbar'
import { SearchAndResults } from '~/components/SearchAndResults/SearchAndResults'
function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Container fluid className='app-container'>
        <SearchAndResults />
      </Container>

    </div>
  )
}

export default App
