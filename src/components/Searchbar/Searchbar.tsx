import { Button, Container, Row, Col, Card, FormControl, FormGroup, FormLabel, Form } from 'react-bootstrap'

export const Searchbar = () => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={12} lg={12}>
                    <Card className='hero-card'>
                        <Form>
                            <FormGroup className='hero-form'>
                                <Row className={'justify-content-center'}>
                                    <Col lg={4} className='text-center text-justify mb-3'>
                                        <FormLabel>Summoner Name</FormLabel>
                                    </Col>
                                    <Col lg={4} className="mb-3">
                                        <Form.Control placeholder='Gosu'></Form.Control>
                                    </Col>
                                    <Col lg={4} className='text-center mb-3'>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}