import { Typography, Divider, styled, Box } from "@mui/material";

const NameTypography = styled(Typography)({
  color: "black",
  fontSize: "2rem",
  fontFamily: "inherit",
});

export default function ResumeTitle({ title }: { title: string }) {
  return (
    <Box width={"95%"} alignSelf={"center"}>
      <NameTypography variant="h4">{title.toUpperCase()}</NameTypography>
      <Divider sx={{ borderBottomWidth: 2, backgroundColor: "black" }} />
    </Box>
  );
}
