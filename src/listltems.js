import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LayersIcon from "@material-ui/icons/Layers";
import ShareIcon from "@material-ui/icons/Share";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import ListIcon from "@material-ui/icons/List";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import RadioButtonCheckedOutlinedIcon from "@material-ui/icons/RadioButtonCheckedOutlined";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//...

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemLink href="#">
        <ListItemText primary="Dashboard" />
      </ListItemLink>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ShareIcon />
      </ListItemIcon>
      <ListItemLink href=" https://wexlx.csb.app/">
        <ListItemText primary="Share Form" />
      </ListItemLink>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <EventSeatIcon />
      </ListItemIcon>
      <ListItemLink href=" https://y0srk.csb.app/">
        <ListItemText primary="Layout" />
      </ListItemLink>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemLink href="https://8jx6z.csb.app/">
        <ListItemText primary="Enrolled" />
      </ListItemLink>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <HelpOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemLink href="https://wkvzm.csb.app/">
        <ListItemText primary="Help" />
      </ListItemLink>
    </ListItem>
  </div>
);
