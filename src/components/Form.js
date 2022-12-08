import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { BsFillTelephoneFill, BsArrowRightCircle } from 'react-icons/bs';
import SearchBar2 from '../components/SearchBar2/SearchBar2'

function GridComplexExample() {
  return (
    <>
    <SearchBar2 />
    <Form className='m-5'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Last Name</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
        </Row>

        <Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type='email'  />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Phone</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
{/* 
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group> */}

<button className='btn-donate ms-3 mt-4'><span id='donate-icon'></span>Submit <BsArrowRightCircle /></button>
    </Form>

    </>

);
}

export default GridComplexExample;