import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/system";
import {
  Alert,
  Avatar,
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import bg from "../../assets/login.png";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { registerCustom } from "@/pages/redux/apiCall/registerRedux";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/navigation';
import login from '../login'


const SignupForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userData);
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(user).length) {
      if (user.status === "success") {
        toast.success(user.msg);
      } else {
        toast.error(user.msg);
      }
    }
  }, [user]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
      country: "",
      state: "",
      city: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Please enter name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
      phone: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Phone number required"),
      password: Yup.string()
        .required("Please enter your password.")
        .min(8, "Your password is too short."),
      confirm_password: Yup.string()
        .required("Please confirm your password.")
        .oneOf([Yup.ref("password")], "Your passwords do not match."),
      country: Yup.object().required("country value is required."),
      state: Yup.object().required("state value is required."),
      city: Yup.object().required("city value is required."),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(registerCustom(values));
      resetForm();
    },
  });

  const colourStyles = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#6c757d",
        fontFamily: "Helvetica",
      };
    },
    control: (provided) => ({
      ...provided,
      color: "#6c757d",
      fontFamily: "Helvetica",
      height: "60px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#6c757d",
      fontFamily: "Helvetica",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: "100%",
            input: {
              color: "#6c757d",
              fontFamily: "Helvetica",
              "&::placeholder": {
                color: "#6c757d",
                fontFamily: "Helvetica",
                opacity: 1,
              },
            },
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
            ".MuiInputBase-root": {
              height: "60px",
              background: "#fff",
            },
            ".btn": {
              background: "#d63384",
              height: "50px",
              fontSize: "20px",
              fontWeight: 900,
              "&:hover": {
                background: "#d63384",
                color: "#fff",
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
          <Grid container xs={12} md={12}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
              item
              xs={12}
              md={6}
            >
            </Grid>
            <Grid
              sx={{
                py: { xs: 2, md: 15 },
                px: 2,
                m: 0,
                backgroundImage: `linear-gradient(to right, transparent, #d947a1)`,
                height: "100%",
              }}
              spacing={2}
              xs={12}
              md={6}
              container
            >
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
                item
                xs={12}
                md={12}
              >
                <h1>ROCK</h1>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  fullWidth
                  id="name"
                  placeholder="Name"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: "#6c757d", fontFamily: "Helvetica" },
                  }}
                />
                {formik.errors.name && (
                  <span className="error">{formik.errors.name}</span>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
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
              </Grid>
              <Grid item xs={12} md={6}>
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
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  fullWidth
                  id="confirm_password"
                  placeholder="Confirm-password"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: "#6c757d", fontFamily: "Helvetica" },
                  }}
                />
                {formik.errors.confirm_password && (
                  <span className="error">
                    {formik.errors.confirm_password}
                  </span>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <PhoneInput
                  id="phone"
                  inputStyle={{
                    color: "#6c757d",
                    fontFamily: "Helvetica",
                    height: "60px",
                    width: "100%",
                    fontSize: "inherit",
                  }}
                  containerStyle={{ height: "60px" }}
                  buttonStyle={{}}
                  country={"in"}
                  value={formik.values.phone}
                  onChange={(selectedOption) => {
                    let event = {
                      target: { name: "phone", value: selectedOption },
                    };
                    formik.handleChange(event);
                  }}
                  onBlur={() => {
                    formik.handleBlur({ target: { name: "phone" } });
                  }}
                />
                {formik.errors.phone && (
                  <span className="error">{formik.errors.phone}</span>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Select
                  id="country"
                  styles={colourStyles}
                  placeholder="Country"
                  options={Country.getAllCountries()}
                  getOptionLabel={(options) => {
                    return options["name"];
                  }}
                  getOptionValue={(options) => {
                    return options["name"];
                  }}
                  value={formik.values.country}
                  onChange={(selectedOption) => {
                    let event = {
                      target: { name: "country", value: selectedOption },
                    };
                    formik.handleChange(event);
                  }}
                  onBlur={() => {
                    formik.handleBlur({ target: { name: "country" } });
                  }}
                />
                {formik.errors.country && (
                  <span className="error">{formik.errors.country}</span>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Select
                  id="state"
                  styles={colourStyles}
                  placeholder="State"
                  options={State?.getStatesOfCountry(
                    formik.values.country?.isoCode
                  )}
                  getOptionLabel={(options) => {
                    return options["name"];
                  }}
                  getOptionValue={(options) => {
                    return options["name"];
                  }}
                  value={formik.values.state}
                  onChange={(selectedOption) => {
                    let event = {
                      target: { name: "state", value: selectedOption },
                    };
                    formik.handleChange(event);
                  }}
                  onBlur={() => {
                    formik.handleBlur({ target: { name: "state" } });
                  }}
                />
                {formik.errors.state && (
                  <span className="error">{formik.errors.state}</span>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Select
                  id="city"
                  styles={colourStyles}
                  placeholder="City"
                  options={City.getCitiesOfState(
                    formik.values.state?.countryCode,
                    formik.values.state?.isoCode
                  )}
                  getOptionLabel={(options) => {
                    return options["name"];
                  }}
                  getOptionValue={(options) => {
                    return options["name"];
                  }}
                  value={formik.values.city}
                  onChange={(selectedOption) => {
                    let event = {
                      target: { name: "city", value: selectedOption },
                    };
                    formik.handleChange(event);
                  }}
                  onBlur={() => {
                    formik.handleBlur({ target: { name: "city" } });
                  }}
                />
                {formik.errors.city && (
                  <span className="error">{formik.errors.city}</span>
                )}
              </Grid>
              <Grid item xs={12} md={12}>
                <Button
                  type="submit"
                  className="btn"
                  fullWidth
                  variant="contained"
                >
                  login
                </Button>
                <Typography sx={{ fontWeight: 900 }} color="gray">
                  New on our platform?
                  <Button
                    onClick={() => router.push('/screen/login')}
                    sx={{ fontWeight: 900, color: "primary" }}
                    variant="text"
                  >
                    Create an account
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default SignupForm;
