export type TEducation = {
  degree: string;
  institution: string;
  department?: string;
  year?: string;
};

export type TExperience = {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
};

export type TAbout = {
  image: string;
  name: string;
  title: string;
  bio: string;
  education: TEducation[];
  experience?: TExperience[];
  address: string;
  resumeLink?: string;
  _id?: string;
  __v?: number;
  createdAt?: Date;
  updatedAt?: Date;
};
