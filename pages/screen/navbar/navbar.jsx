import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Login from "../login";
import { Button } from "@mui/material";
import SignupForm from "../signup";

const data = ["Home", "info", "register", "about us", "contact us"];
export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          height: "60px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          ".dot": {
            padding: "0px !important",
            border: "5px solid #fff",
            borderRadius: "50%",
            width: "10px",
          },
          ".dot1": {
            padding: "0px !important",
            border: "5px solid transparent",
            borderRadius: "50%",
          },
          button: {
            display: "flex",
            flexDirection: "column",
            color: "#fff",
            fontSize: "15px",
            "&:hover": {
              background: "transparent",
            },
          },
          ".sideline": {
            borderRight: "3px solid white",
            height: "25px",
            alignSelf: "center",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "25px",
            textTransform: "uppercase",
            fontWeight: "bold",
            letterSpacing: 4,
            textShadow: "1px 1px 2px #fff",
          }}
        >
          <span>world</span>
        </Box>
        {data.map((item, index) => (
          <>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={
                    index === value
                      ? {
                          background: "transparent",
                          color: "#fff",
                          fontWeight: 900,
                          "&:hover": {
                            background: "transparent",
                          },
                        }
                      : { background: "" }
                  }
                  onClick={() => handleChange(index)}
                  variant="text"
                >
                  {" "}
                  <span>{item}</span>
                  <span className={index === value ? "dot" : "dot1"}></span>
                </Button>
                <Box className={index === 4 ? null : "sideline"} />
              </Box>
            </Box>
          </>
        ))}
      </Box>
      {value === 0 ? (
        <Box >
          {/* <Login /> */}
          <SignupForm />
        </Box>
      ) : null}
    </>
  );
}
