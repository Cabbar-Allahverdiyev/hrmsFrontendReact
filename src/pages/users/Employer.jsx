import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import EmployerService from "../../services/employerService";

export default function Employer() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployer()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Table style={{ margin: "5em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirkət Adı</Table.HeaderCell>
            <Table.HeaderCell>Mail</Table.HeaderCell>
            <Table.HeaderCell>Web Sayt</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.website}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
