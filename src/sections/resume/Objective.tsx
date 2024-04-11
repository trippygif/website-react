import ResumeTitle from "@/components/resume/ResumeTitle";
import { Box, Stack, styled, Typography } from "@mui/material";

const ObjectiveTypography = styled(Typography)({
  color: "black",
  fontSize: "1rem",
  fontFamily: "inherit",
  fontWeight: 400,
  marginLeft: "60px",
});

export default function Objective() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column" spacing={2}>
        <ResumeTitle title="Objective" />
        <Box width="70%">
          <ObjectiveTypography>
            Full Stack Web Developer with 8 years professional experience with
            expertice in ReactJs/Redux, Typescript, HTML/CSS and Nodejs and
            high-level proficiency in MySQL, MongoDB, Docker, GCP and
            Kubernetes. Additional experience with mentorship and management to
            guide and assist developers to achieve career goals and progression
            and education and instruction which helped to establish close
            relationships with businesses to build high-quality digital
            solutions.
          </ObjectiveTypography>
        </Box>
      </Stack>
    </Box>
  );
}
