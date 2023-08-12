import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, event, branch, seatallocated) {
  return { id, date, name, event, branch, seatallocated };
}

const rows = [
  // createData(),
  // createData(),
  // createData(),
  // createData(),
  // createData()
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    JunginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>PARAGRAPH HERE</Title>
      {/* <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell align="right">Seat Allocated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.event}</TableCell>
              <TableCell>{row.branch}</TableCell>
              <TableCell align="right">{row.seatallocated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </React.Fragment>
  );
}
