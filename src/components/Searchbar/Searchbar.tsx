import { Button, Container, Row, Col, Card, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { Form, Field } from 'react-final-form'
import { z } from 'zod'

interface FormProps {
    onSubmit: (values: any) => void
}

const MyForm = ({ onSubmit }: FormProps) => {
    const champNameSchema = z.string().min(1);

    const validateChampName = (value: string) => {
        console.log(value)
        console.log(champNameSchema.safeParse(value))
        return champNameSchema.safeParse(value).success ? undefined : 'Required'
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Container className="hero-form">
                        <Row>
                            <Col lg={4} className='text-center text-justify mb-3'>
                                <FormLabel>Champion Name</FormLabel>
                            </Col>
                            <Col lg={4} className='text-center text-justify mb-3'>
                                <Field name="championName" validate={validateChampName}>
                                    {({ input, meta }) => (
                                        <div>
                                            <input {...input} type="text" placeholder="Aatrox" />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </Col>
                            <Col lg={4} className='text-center text-justify mb-3'>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Container>
                </form>
            )}
        />)
}

export const Searchbar = () => {
    const submit = (values: any) => { console.log('submit', values) };

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={12} lg={12}>
                    <Card className='hero-card'>
                        <MyForm onSubmit={submit} />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

// bootstrap form
{/* <Form>
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
</Form> */}