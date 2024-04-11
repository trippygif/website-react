import { Box, Typography, Stack, styled } from "@mui/material";

const NameTypography = styled(Typography)({
  color: "white",
  fontSize: "2.5rem",
  fontFamily: "inherit",
});

const BioTypography = styled(Typography)({
  color: "white",
  fontSize: "1rem",
  fontFamily: "inherit",
  fontWeight: 300,
});

export default function ResumeHeader() {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Stack direction="row" justifyContent="space-between" mx={2} py={2}>
        <NameTypography>BRYAN YOELIN</NameTypography>
        <Stack direction="column">
          <Stack direction="row" spacing={4}>
            <BioTypography variant="h6">7327 N Delaware Ave</BioTypography>
            <BioTypography variant="h6">Portland, OR 97217</BioTypography>
          </Stack>
          <Stack direction="row" spacing={5}>
            <BioTypography variant="h6">bryoelin@gmail.com</BioTypography>
            <BioTypography variant="h6">713-818-9401</BioTypography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
