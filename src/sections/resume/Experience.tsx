import ResumeTitle from "@/components/resume/ResumeTitle";
import { Box, Stack, styled, Typography } from "@mui/material";
import { ExperienceItem } from "@/components/resume/ExperienceItem";

const ExperienceTypography = styled(Typography)({
  color: "black",
  fontSize: "1rem",
  fontFamily: "inherit",
  fontWeight: 400,
  marginLeft: "60px",
});

export default function Experience() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column" spacing={2}>
        <ResumeTitle title="Experience" />
        <ExperienceItem
          employer="Alcove Technologies"
          title="Senior Software Engineer"
          startDate="July 2022"
          endDate="April 2024"
          description=" Worked with 2 other developers to build a complete React/NextJS frontend and NestJS backend from the ground up to build a B2B SaaS procurement tracking software solution for interior designers. Worked tightly with our designer to bring our Figma designs to life. Proposed and added React Testing Library to provide front end code test coverage. Integrated Stripe to provide trials and subscriptions for our customers. Added a socket layer in the backend system to allow for real time updates to the frontend and our proprietary Chrome extension using Google Pub/Sub and Socket.io. Introduced Storybook and Chromatic to give the product team and designer insight into our components and their states. Created a Github Actions workflow to automatically deploy our frontend and backend to GCP."
          techStack="ReactJS, Redux, TypeScript, NextJS, NestJS, MongoDB, GCP, Github Actions, Chromatic"
        />
        <ExperienceItem
          employer="Xandr/Microsoft"
          title="Senior Software Engineer, Team Lead"
          startDate="December 2019"
          endDate="June 2022"
          description=" Led and mentored a team of 2 engineers to develop highly scalable front end React applications for the Xandr Monetize/Microsoft Audience Network. Created and completed epics that introduced new functionality to a multitude of customers including
                    enhancing the state and efficacy of political deals, programmatic roadblocking advertising deals, multi buyer deals and long overdue code cleanup. Had primary ownership of multiple Scala
                    repositories with hundreds of thousands of daily requests for advertising deal metrics. Helped other team leads architect a highly complex monorepo with over 70 contributors; additions included abstracting relevant services into private repositories, refining our CI pipelines to create code quality conditions that satisfied each teams needs and enhanced build and testing times.
                    Primary ownership of a GraphQL schema layer used by every React project on the Xandr Monetize and Invest platforms. Trained contributors on Kubernetes for various deployments and routing as well as Redux for state management in React applications."
          techStack="ReactJS, Redux, TypeScript, MySQL, GraphQL, Kubernetes, Concourse, Helm, Scala, Docker"
        />
        <ExperienceItem
          employer="Sublime Solutions LLC"
          title="Full Stack Web Developer"
          startDate="May 2018"
          endDate="November 2019"
          description=" Working as a developer and project manager for creating a manufacturing and inventory control
                    software system to ensure compliance using ReactJS. Migrated data from Excel and legacy systems to a 
                    MongoDB instance. The application implements NodeJS based micro services and leverages AWS SQS and SNS to send messages
                    between services. Front-end uses a Firebase authentication system with a specified Google domain to
                    ensure proper security for proprietary systems. Application environment requires strict linting and
                    test driven development. Assisted in creating a product numeration system for proper inventory
                    control. Created an Angular 5 based employee portal to streamline employee actions and information
                    into a consolidated application that integrated Google Domain APIs."
          techStack="ReactJS, Angular 5, NodeJS, Typescript, MySQL, MongoDB, Terraform, AWS EC2, AWS SNS/SQS, AWS S3, CircleCI"
        />
        <ExperienceItem
          employer="New Direction Trust Company"
          title="Full Stack Web Developer"
          startDate="July 2016"
          endDate="May 2018"
          description=" Initialized a NodeJS backend to replace a legacy PHP system, maintained a PHP frontend based
                    customer portal allowing clients to invest their IRA funds in non-prohibited transactions.
                    Created and maintained a MySQL instance to back up and export Oracle CRM data to streamline API
                    communication between the frontend, backend and CRM.
                    Developed a NodeJS based OAuth REST API set to allow 3rd parties to onboard their clients and fund
                    their IRA accounts in order to make purchase requests."
          techStack="NodeJS, PHP, Twig, MySQL, Javascript, AWS RDS, AWS Elastic Beanstalk"
        />
        <ExperienceItem
          employer="FunGram LLC"
          title="Lead Instructor"
          startDate="Feb 2016"
          endDate="June 2016"
          description=" Instructed children from ages 10-13 about programming using C and Arduino.
                    Duties included teaching programming fundamentals, creating curricula,
                    circuit design and constructing projects. Attended multiple education seminars and set up booths
                    with engaging promotional materials made by previous students to market and promote the company."
        />
      </Stack>
    </Box>
  );
}
