import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";

function AddUser() {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const checkoutSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required")
    });
    const initialValues = {
        firstName: "",
        lastName: "",
        email: ""
    };

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box>
            <Typography variant="h4" sx={styles.title}>Create User</Typography>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="20px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            m="20px"
                        >
                            <TextField                                
                                variant="outlined"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField                                
                                variant="outlined"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField                                
                                variant="outlined"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="space-between" m="20px">
                            <Button type="button" color="secondary" variant="contained" onClick={handleBack}>
                                Cancel
                            </Button>
                            <Button type="submit" color="primary" variant="contained">
                                Create
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
}


/** @type {import("@mui/material").SxProps} */
const styles = {
    title: {
        p: 2
    }
};


export default AddUser;