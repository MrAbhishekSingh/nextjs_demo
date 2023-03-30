import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import bg from "../../assets/login.png";
import { Box, Button, Grid, TextField } from "@mui/material";
import { loginCustom } from "@/pages/redux/apiCall/registerRedux";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userData);
  const router = useRouter();
  console.log("user", user);

  React.useEffect(() => {
    if (Object.keys(user).length > 0) {
      if (user.status === "success") {
        toast.success(user.msg);
      } else {
        toast.error(user.msg);
      }
    }
  }, [user]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
      password: Yup.string()
        .required("Please enter your password.")
        .min(8, "Your password is too short."),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(loginCustom(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: { xs: 5, sm: 5, md: 15 },
        }}
      >
        <Box
          component={Grid}
          item
          boxShadow={20}
          xs={3}
          sx={{
            width: 400,
            height: "auto",
            border: "2px solid #fff",
            borderRadius: "20px",
            overflow: "hidden",
            ".btn": {
              background: "#d63384",
              height: "50px",
              fontSize: "20px",
              fontWeight: 900,
              "&:hover": {
                background: "#d63384",
              },
            },
            ".error": {
              color: "#d32f2f",
              fontFamily: "Helvetica",
              fontWeight: 400,
              fontSize: "0.75rem",
              lineHeight: "1.66",
              letterSpacing: "0.03333em",
              textAlign: "left",
              marginTop: "3px",
              marginRight: "14px",
              marginbottom: 0,
              marginLeft: "14px",
            },
          }}
        >
          <div
            style={{
              position: "relative",
              height: 200,
              width: "100%",
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "gray",
                width: 150,
                height: 150,
                fontSize: "40px",
                position: "relative",
                top: "30px",
                border: "4px solid #fff",
              }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              B
            </Avatar>
          </div>

          <CardContent
            sx={{
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ".MuiFormControl-root": {
                mb: "10px",
              },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "45px",
                justifyContent: "flex-end",
                marginBottom: "10px",
                textTransform: "uppercase",
                color: "#d63384",
                fontWeight: "900",
                fontSize: "20px",
                textShadow: "1px 1px gray",
              }}
            >
              Login
            </Typography>

            <TextField
              value={formik.values.email}
              onChange={formik.handleChange}
              fullWidth
              id="email"
              placeholder="Email"
              variant="outlined"
              InputLabelProps={{
                style: { color: "#6c757d", fontFamily: "Helvetica" },
              }}
            />
            {formik.errors.email && (
              <span className="error">{formik.errors.email}</span>
            )}
            <TextField
              value={formik.values.password}
              onChange={formik.handleChange}
              fullWidth
              id="password"
              type="password"
              placeholder="Password"
              variant="outlined"
              InputLabelProps={{
                style: { color: "#6c757d", fontFamily: "Helvetica" },
              }}
            />
            {formik.errors.password && (
              <span className="error">{formik.errors.password}</span>
            )}
            <Button
              sx={{ my: 2 }}
              
              className="btn"
              fullWidth
              variant="contained"
              type="submit"
            >
              login
            </Button>
            <Typography color="gray">
              New on our platform?{" "}
              <Button onClick={() => router.push("/screen/signup")} variant="text">Create an account</Button>
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </form>
  );
}

// CREATE DATABASE IF NOT EXISTS `user_list` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
// USE `user_list`;

// CREATE TABLE IF NOT EXISTS `users` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `name` varchar(50) NOT NULL,
//   `email` varchar(255) NOT NULL,
//   `password` varchar(100) NOT NULL,
//   `phone` varchar(15) NOT NULL,
//   `country` json DEFAULT NULL,
//   `state` json DEFAULT NULL,
//   `city` json DEFAULT NULL,
//   `last_login` varchar(100) NOT NULL,

//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

// INSERT INTO `users`("id", "name", "email", "password","phone","country","state","city") VALUES(1, `Abhishek`, `testfgjgf@test.com`, `123fgj45678`,{name: `John`, age: 30, city: `New York`},{name: `John`, age: 30, city: `New York`},{name: `John`, age: 30, city: `New York`},`25-52-22`);

// CREATE DATABASE node-app

// CREATE TABLE users (
//   id int(11) NOT NULL AUTO_INCREMENT,
//   name varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
//   email varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
//   password varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
//   PRIMARY KEY (id),
//   UNIQUE KEY email (email)
//  ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
