import { Box, Stack, styled, Typography } from "@mui/material";

const ExperienceTypography = styled(Typography)({
  color: "black",
  fontSize: "1rem",
  fontFamily: "inherit",
  fontWeight: 400,
  marginLeft: "5px",
});

const TitleTypography = styled(Typography)({
  color: "black",
  fontSize: "1.2rem",
  fontFamily: "inherit",
  fontWeight: 500,
});

export const ExperienceItem = ({
  employer,
  title,
  startDate,
  endDate,
  description,
  techStack,
}: {
  employer: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string;
}) => {
  return (
    <Box width="93%" alignSelf="center">
      <Stack direction="column" spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <TitleTypography>
            {employer} - {title}
          </TitleTypography>
          <TitleTypography>
            {startDate}-{endDate}
          </TitleTypography>
        </Stack>
        <Box sx={{ width: "100%" }}>
          <ExperienceTypography>{description}</ExperienceTypography>
        </Box>
        <span>
          <ExperienceTypography>
            <strong>Tech Stack: </strong>
            {techStack}
          </ExperienceTypography>
        </span>
      </Stack>
    </Box>
  );
};
