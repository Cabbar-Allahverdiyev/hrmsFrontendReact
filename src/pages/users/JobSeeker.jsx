import React,{useEffect, useState} from "react";
import { Table } from 'semantic-ui-react'

import JobSeekerService from "../../services/jobSeeker";

export default function JobSeeker() {
  const [jobSeekers, setJobSeekers] = useState([]);
  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeeker()
      .then((result) => setJobSeekers(result.data.data));
  }, []);
  return (
    <div>
      <Table style={{ margin: "5em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Mail</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.id}>
              <Table.Cell>
                {jobSeeker.firstName} {jobSeeker.lastName}
              </Table.Cell>
              <Table.Cell>{jobSeeker.email}</Table.Cell>
              <Table.Cell>{jobSeeker.password}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
