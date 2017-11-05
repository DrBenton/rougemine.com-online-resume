import dateFormat from "date-fns/format";
import BioRepository from "../src/repository/bio-repository";
import I18nRepository from "../src/repository/i18n-repository";
import DocumentRepository from "../src/repository/document-repository";
import TechnologiesRepository from "../src/repository/technologies-repository";
import JobExperienceRepository from "../src/repository/job-experience-repository";
import MyWorkRepository from "../src/repository/my-work-repository";

const USAGE_STR = "Usage: node bin/generate-app-data.mjs [data path] [lang]";

if (process.argv.length < 4) {
  console.log(USAGE_STR);
}

const dataBasePath = process.argv[2];
const lang = process.argv[3];

const validLangs = ["en", "fr"];
if (!validLangs.includes(lang)) {
  console.log(
    `${USAGE_STR} - "lang" must be ${validLangs.join(
      "|"
    )}, got ${lang}`
  );
  process.exit(1);
}

const W3C_DATE_FORMAT = "YYYY-MM-DD\\THH:mm:ssZZ";

const appData = {
  cvData: {
    bio: new BioRepository(dataBasePath).getBio(lang),
    document: new DocumentRepository(dataBasePath).getDocument(lang),
    technologies: new TechnologiesRepository(dataBasePath).getTechnologies(lang),
    jobExperience: new JobExperienceRepository(dataBasePath).getJobExperience(lang),
    myWork: new MyWorkRepository(dataBasePath).getMyWork(lang),
  },
  i18nData: new I18nRepository(dataBasePath).getInternationalisationData(lang),
  buildTime: dateFormat(new Date(), W3C_DATE_FORMAT),
};

console.log(JSON.stringify(appData, null, 2));
