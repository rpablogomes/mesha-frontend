import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  const history = useHistory();
  return (
    <Tab
      component="a"
      onClick={(event) => {
        history.push(props.to);
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const tabs = [
    {
      label: "Atendimentos",
      route: "/customerServices",
    },
    {
      label: "Usuários",
      route: "/users",
    },
    {
      label: "Doutores",
      route: "/doctors",
    },
    {
      label: "Procedimentos",
      route: "/procedures",
    },
  ];
  const location = useLocation();
  const currentIndex = tabs.findIndex((tab) =>
    location.pathname.includes(tab.route)
  );

  const [value, setValue] = React.useState(currentIndex);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          {tabs.map((tab, index) => (
            <LinkTab
              label={tab.label}
              to={tab.route}
              key={tab.label + index}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Atendimentos
      </TabPanel>
      <TabPanel value={value} index={1}>
        Usuários
      </TabPanel>
      <TabPanel value={value} index={2}>
        Doutores
      </TabPanel>
      <TabPanel value={value} index={3}>
        Procedimentos
      </TabPanel>
    </div>
  );
}
