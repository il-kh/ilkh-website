import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type MarkdownMetadata = { [key: string]: any };

export type MarkdownItem<T = MarkdownMetadata> = {
  metadata: T;
  slug: string;
  content: string;
};

function getMDFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md");
}

function readMDFile<T = MarkdownMetadata>(filePath: string): MarkdownItem<T> {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data: metadata, content } = matter(rawContent);
  const slug = path.basename(filePath, path.extname(filePath));
  return {
    metadata: metadata as T,
    slug,
    content,
  };
}

export function getMarkdownCollection<T = MarkdownMetadata>(folder: string): MarkdownItem<T>[] {
  const dir = path.join(process.cwd(), folder);
  const mdFiles = getMDFiles(dir);
  return mdFiles.map((file) => readMDFile<T>(path.join(dir, file)));
}

// For competencies
export type CompetencyMetadata = {
  title: string;
  value: string;
  order: number;
  subline: string;
  icon: string;
  image: string;
  body: string;
  [key: string]: any;
};

export function getCompetencies() {
  return getMarkdownCollection<CompetencyMetadata>("content/competencies");
}

// For service-clusters
export type ServiceClusterMetadata = {
  title: string;
  value: string;
  order: number;
  subline: string;
  icon: string;
  image: string;
  body: string;
  [key: string]: any;
};

export function getServiceClusters() {
  return getMarkdownCollection<ServiceClusterMetadata>("content/service-clusters");
}

// For services
export type ServiceMetadata = {
  title: string;
  value: string;
  competency?: string;
  serviceCluster?: string;
  thumbnail: string;
  gallery?: { image: string }[];
  body: string;
  [key: string]: any;
};

export function getServices() {
  return getMarkdownCollection<ServiceMetadata>("content/services");
}

// For projects
export type ProjectMetadata = {
  title: string;
  competency?: string;
  serviceCluster?: string;
  service?: { service: string }[];
  thumbnail: string;
  gallery?: { image: string }[];
  isShowcase?: boolean;
  dateStart: string | Date;
  dateEnd?: string | Date;
  summary: string;
  body: string;
  [key: string]: any;
};

export function getProjects() {
  return getMarkdownCollection<ProjectMetadata>("content/projects");
}