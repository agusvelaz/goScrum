import { useFormik } from "formik";
import { Box, Button, Container, Typography } from "@mui/material";
import * as Yup from "yup";

const taskFormSection = {
  width: { md: "30%", xl: "45%" },
  p: 2,
};
const form = {
  display: "flex",
  flexDirection: "column",
  textarea: {
    border: ".5px solid #ffffff1c",
    borderRadius: "5px",
    height: 150,
    margin: { xs: "10px 0", xl: "10px 0" },
    background: "#ffffff00",
    color: "#fff",
  },
  span: {
    height: 15,
    color: "red",
    textAlign:"center"
  },
  input: {
    border: ".5px solid #ffffff1c",
    borderRadius: "5px",
    height: 36,
    margin: { xs: "10px 0", xl: "0" },
    background: "#ffffff00",
    color: "#fff",
    ":focus": {
      opacity: 1,
      outline: "none",
      background: "#0000001c",
    },
  },
  select: {
    border: ".5px solid #ffffff1c",
    borderRadius: "5px",
    height: 40,
    margin: { xs: "10px 0", xl: "0 0 0 10px" },
    background: "#ffffff00",
    color: "#fff",
    ":focus": {
      opacity: 1,
      outline: "none",
      background: "#0000001c",
    },
  },
  button: {
    margin: { xs: "10px 0", xl: "0" },
  },
};

const formDiv = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

export default function TaskForm() {
  const required = "Campo obligatorio";
  const validationSchema = () =>
    Yup.object().shape({
      title: Yup.string()
        .min(5, "El titulo debe tener 5 caracteres como minimo")
        .required(required),
      status: Yup.string().required(required),
      priority: Yup.string().required(required),
    });
  const initialValues = {
    title: "",
    status: "",
    priority: "",
    description: "",
  };
  const onSubmit = (values, { setSubmitting }) => {
    alert();
    setSubmitting(false);
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
  } = formik;

  return (
    <Box component="section" id="TaskForm" sx={taskFormSection}>
      <h2>Crear tarea</h2>
      <Box component="form" onSubmit={handleSubmit} sx={form}>
        <Box display="flex" flexDirection={{ xs: "column", xl: "row" }} >
          <Box sx={formDiv}>
            <input
              // component="input"
              placeholder="Titulo"
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              // borderColor={errors.title && "red !important"}
            />
            <span>{errors.title && touched.title && errors.title }</span>
          </Box>
          <Box sx={formDiv}>
            <select name="status" onChange={handleChange} onBlur={handleBlur}>
              <option value="">Seleccione estado</option>
              <option value="New">Nuevo</option>
              <option value="inProcess">En proceso</option>
              <option value="finished">Finalizada</option>
            </select>
            <span>{errors.status && touched.status && errors.status}</span>
          </Box>
          <Box sx={formDiv}>
            <select name="priority" onChange={handleChange} onBlur={handleBlur}>
              <option value="">Seleccione prioridad</option>
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
            {errors.priority && touched.priority && (
              <span>{errors.priority}</span>
            )}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <textarea
            name="description"
            placeholder="Descripcion"
            type="text"
            onChange={handleChange}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="contained"
            color="secondary"
          >
            Crear
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
