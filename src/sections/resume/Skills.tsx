import ResumeTitle from "@/components/resume/ResumeTitle";
import { Box, Stack, styled, Typography } from "@mui/material";

const ObjectiveTypography = styled(Typography)({
  color: "black",
  fontSize: "1.2rem",
  fontFamily: "inherit",
  fontWeight: 400,
  marginLeft: "10px",
});

const SkillTypography = styled(Typography)({
  color: "black",
  fontSize: "1rem",
  fontFamily: "inherit",
  fontWeight: 300,
});

export default function Objective() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="column" spacing={2}>
        <ResumeTitle title="Skills" />
        <Box width="70%">
          {skillTypes.map((skillType) => (
            <Stack
              key={skillType.type}
              direction="row"
              spacing={2}
              sx={{ ml: 8 }}
            >
              <Stack direction="column" spacing={1}>
                <Box width={"100px"}>
                  <ObjectiveTypography variant="h6" sx={{ fontWeight: 500 }}>
                    {skillType.type.toUpperCase()}
                  </ObjectiveTypography>
                </Box>
                <Box width={"100%"}>
                  <Stack direction="row" spacing={2} ml={3}>
                    {skillType.skills.map((skill) => (
                      <SkillTypography key={skill}>{skill}</SkillTypography>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

const skillTypes = [
  {
    type: "Code",
    skills: [
      "TypeScript",
      "React",
      "Redux",
      "NodeJS",
      "Jest/RTL",
      "Next.js",
      "NestJS",
      "MongoDB",
      "MySQL",
      "HTML/CSS",
      "GraphQL",
    ],
  },
  {
    type: "Dev",
    skills: [
      "Docker",
      "Kubernetes",
      "Github Actions",
      "Microservices",
      "Messaging Queues",
      "GCP",
      "AWS",
      "CI/CD",
      "TDD",
      "Agile",
    ],
  },
  {
    type: "Other",
    skills: [
      "Wordpress",
      "Stripe",
      "Firebase",
      "Excel",
      "Wordpress",
      "Mentorship",
      "Management",
      "Education",
      "Music Production",
    ],
  },
];
