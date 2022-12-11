import { Button, Container, Row, Col, Card, FormLabel } from 'react-bootstrap'
import { Form, Field } from 'react-final-form'
import { z } from 'zod'

interface FormProps {
    onSubmit: (values: any) => void
}

export interface SearchFormValues {
    championName: string
}

const MyForm = ({ onSubmit }: FormProps) => {
    const champNameSchema = z.string().min(1);

    const validateChampName = (value: string) => {
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

interface SearchbarProps {
    setChampion: (champion: SearchFormValues) => void
}

export const Searchbar = ({ setChampion }: SearchbarProps) => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={12} lg={12}>
                    <Card className='hero-card'>
                        <MyForm onSubmit={setChampion} />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}