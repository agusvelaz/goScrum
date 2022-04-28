import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Box, Switch, FormControlLabel, Button } from "@mui/material";
import InputsAuth from "./InputsAuth";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsIcon from "@mui/icons-material/Groups";

const formStyle = {
  m: "auto",
  px: 4,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  background: "#201f23",
  color: "#fff",
  width: { sm: "400px" },
  input: {
    height: 25,
  },
  select: {
    border: ".5px solid #ffffff1c",
    borderRadius: "5px",
    height: 40,
    background: "#ffffff00",
    color: "#fff",
    // mb: 2,
    ":focus": {
      opacity: 1,
      outline: "none",
      background: "#0000001c",
    },
  },
  button: {
    my: 2,
    mx: "auto",
    width: "100%",
    height: 30,
    color: "#fff",
    backgroundColor: "secondary.main",
    border: ".5px solid #ffffff1c",
    borderRadius: "5px",
    ":hover": {
      backgroundColor: "secondary.dark",
      cursor: "pointer",
    },
  },
};

const errorMessage = {
  height: 25,
  color: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Register() {
  const required = "Campo obligatorio";
  const validationSchema = () =>
    Yup.object().shape({
      userName: Yup.string()
        .min(4, "El usuario deben tener 4 caracteres como mínimo")
        .required(required),
      email: Yup.string()
        .email("Dirección de correo no válida")
        .required(required),
      password: Yup.string().required(required),
      role: Yup.string().required(required),
      continent: Yup.string().required(required),
      region: Yup.string().required(required),
    });
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    teamID: "",
    role: "",
    continent: "",
    region: "",
    switch: false,
  };
  const handleChangeContinent = (value) => {
    setFieldValue("continent", value);
    if (value !== "America") setFieldValue("region", value);
  };
  const onSubmit = (values, { setSubmitting }) => {
    const teamID = !values.teamID ? uuidv4() : values.teamID;
    setSubmitting(false);
    console.log({
      userName: values.userName,
      password: values.password,
      email: values.email,
      teamID,
      role: values.role,
      continent: values.continent,
      region: values.region,
    });

    // fetch("",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       user: {
    //         userName: values.userName,
    //         password: values.password,
    //         email: values.email,
    //         teamID,
    //         role: values.role,
    //         continent: values.continent,
    //         region: values.region,
    //       },
    //     }),
    //   }).then(response => response.json());
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = formik;

  return (
    <Box>
      <Box component="form" sx={formStyle} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <InputsAuth
        // errorInput={errors.userName && touched.userName && true }
        >
          <PersonOutlineOutlinedIcon />
          <input
            placeholder="Usuario"
            type="userName"
            name="userName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userName}
          />
        </InputsAuth>
        <Box component="span" sx={errorMessage}>
          {errors.userName && touched.userName && errors.userName}
        </Box>
        <InputsAuth
        // errorInput={errors.email && touched.email && true }
        >
          <AlternateEmailIcon />
          <input
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </InputsAuth>
        <Box component="span" sx={errorMessage}>
          {errors.email && touched.email && errors.email}
        </Box>
        <InputsAuth
        // errorInput={errors.password && touched.password && true }
        >
          <LockOutlinedIcon />
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </InputsAuth>
        <Box component="span" sx={errorMessage}>
          {errors.password && touched.password && errors.password}
        </Box>
        <select name="role" onChange={handleChange} onBlur={handleBlur}>
          <option value="">Seleccione su rol</option>
          <option value="Team Member">Team Member</option>
          <option value="Team Leader">Team Leader</option>
        </select>
        <Box component="span" sx={errorMessage}>
          {errors.role && touched.role && errors.role}
        </Box>
        <select
          name="continent"
          onChange={(e) => handleChangeContinent(e.currentTarget.value)}
          onBlur={handleBlur}
        >
          <option value="">Seleccione su continente</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Other">Other</option>
        </select>
        <Box component="span" sx={errorMessage}>
          {errors.continent && touched.continent && errors.continent}
        </Box>
        {values.continent == "America" ? (
          <>
            <select name="region" onChange={handleChange} onBlur={handleBlur}>
              <option value="">Seleccione su region</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
            </select>
            <Box component="span" sx={errorMessage}>
              {errors.region && touched.region && errors.region}
            </Box>
          </>
        ) : (
          <></>
        )}

        <FormControlLabel
          control={
            <Switch
              name="switch"
              color="secondary"
              value={values.switch}
              onChange={() =>
                formik.setFieldValue("switch", !formik.values.switch)
              }
            />
          }
          label="Perteneces a un equipo ?"
        />

        {values.switch && (
          <>
            <InputsAuth>
              <GroupsIcon />
              <input
                name="teamID"
                type="text"
                placeholder="Ingrese ID del equipo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.teamID}
              />
            </InputsAuth>
            <Box component="span" sx={errorMessage}>
              {errors.teamID && touched.teamID && errors.teamID}
            </Box>{" "}
          </>
        )}
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          color="secondary"
        >
          Registrarme
        </Button>
        <p>
          ¿Ya tiene cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </Box>
    </Box>
  );
}
