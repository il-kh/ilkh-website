import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectMetadata = {
  title: string;
  category?: string;
  thumbnail: string;
  gallery?: { image: string }[];
  isShowcase?: boolean;
  dateStart: string;
  dateEnd?: string;
  summary: string;
  body: string;
  [key: string]: any;
};

export type Project = {
  metadata: ProjectMetadata;
  slug: string;
  content: string;
};

function getMDFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md");
}

function readMDFile(filePath: string): Project {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data: metadata, content } = matter(rawContent);

  const slug = path.basename(filePath, path.extname(filePath));
  return {
    metadata: metadata as ProjectMetadata,
    slug,
    content,
  };
}

export function getProjects(): Project[] {
  const dir = path.join(process.cwd(), "content/projects");
  const mdFiles = getMDFiles(dir);
  return mdFiles.map((file) => readMDFile(path.join(dir, file)));
}