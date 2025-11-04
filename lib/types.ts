export type ResearchType = {
  _id?: string;
  title: string;
  technologies: string[];
  duration: string;
  description: string;
  researchScope: string;
  suggestedRoles: string[];
  similarProjects: {
    title: string;
    link: string;
  }[];
  researchIndustry: string;
  researchStudy: string;
  researchType: string;
  difficulty: string;
};
