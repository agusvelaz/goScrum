import InputContainer from "./InputContainer";
import { Formik } from "formik";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Logo from "./Logo";

const formStyle = {
  m: "auto",
  px: 4,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: "primary.light",
  color: "#fff",
  width: { sm: "400px" },
  span: {
    height: 25,
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    my: 2,
    mx: "auto",
    width: "100%",
    height: 30,
    color: "#fff",
    backgroundColor: "primary.light",
    border: ".5px solid #ffffff1c",
    borderRadius: "5px",
    ":hover": {
      backgroundColor: "primary.main",
      cursor: "pointer",
    },
  },
};

export default function Login() {
  const navigateTo = useNavigate();
  return (
    <Box>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Password required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          localStorage.setItem("logged", "yes");
          setTimeout(() => {
            setSubmitting(false);
            navigateTo("/", { replace: true });
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Box component="form" sx={formStyle} onSubmit={handleSubmit}>
            <Box display="flex" mx="auto" my={2} alignItems="center">
              <Logo />
            </Box>

            <InputContainer>
              <AlternateEmailIcon />
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </InputContainer>
            <span>{errors.email && touched.email && errors.email}</span>
            <InputContainer >
              <LockOutlinedIcon />
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </InputContainer>
            <span>
              {errors.password && touched.password && errors.password}
            </span>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
