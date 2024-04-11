import { roboto_mono } from "@/app/fonts";
import ResumeHeader from "@/components/resume/ResumeHeader";
import Objective from "@/sections/resume/Objective";
import Experience from "@/sections/resume/Experience";
import { Box, Stack } from "@mui/material";

const DividerBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "40px",
        backgroundColor: "black",
        my: 2,
      }}
    ></Box>
  );
};

export default function Resume() {
  return (
    <Box sx={{ width: "100%" }} className={roboto_mono.className}>
      <Stack direction="column" spacing={2}>
        <ResumeHeader />
        <DividerBar />
        <Objective />
        <Experience />
      </Stack>
    </Box>
  );
}
