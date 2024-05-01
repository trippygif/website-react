import ResumeTitle from "@/components/resume/ResumeTitle";
import { Box, Stack, styled, Typography } from "@mui/material";

const ObjectiveTypography = styled(Typography)({
  color: "black",
  fontSize: "1.2rem",
  fontFamily: "inherit",
  fontWeight: 400,
  marginLeft: "10px",
});

export default function Education() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column" spacing={2}>
        <ResumeTitle title="Education" />
      </Stack>
    </Box>
  );
}
