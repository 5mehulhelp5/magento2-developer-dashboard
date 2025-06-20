import * as Yup from "yup";
import {
    Formik, Form, Field, ErrorMessage
} from "formik";
import {
    FormGroup,
    Button
} from "react-bootstrap";

const MagentoForm = (props) => {
    const validationSchema =
        Yup.object().shape({
            name: Yup.string().required("Required"),
            url: Yup.string().required("Required"),
            accessToken: Yup.string().required("Required")
        });

    console.log(props);

    return (
        <div className="form-wrapper">
            <Formik {...props}
                validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <Field name="name" type="text" className="form-control" />
                        <ErrorMessage name="name" className="d-block invalid-feedback" component="span" />
                    </FormGroup>

                    <FormGroup>
                        <Field name="url" type="text" className="form-control" />
                        <ErrorMessage name="url" className="d-block invalid-feedback" component="span" />
                    </FormGroup>

                    <Button variant="danger" size="lg" type="submit">
                        {props}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
}

export default MagentoForm;