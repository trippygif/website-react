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
      </Stack>
    </Box>
  );
}
