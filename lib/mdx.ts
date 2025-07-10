import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMarkdownContent(contentType: string, slug: string) {
  const filePath = path.join(contentDirectory, contentType, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontMatter: data,
    content
  };
}

export async function getAllSlugs(contentType: string) {
  const folder = path.join(contentDirectory, contentType);
  
  if (!fs.existsSync(folder)) {
    return [];
  }
  
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter(file => file.endsWith('.mdx'));

  return markdownFiles.map(file => ({
    slug: file.replace(/\.mdx$/, '')
  }));
}

export async function getAllContent(contentType: string) {
  const slugs = await getAllSlugs(contentType);
  const content = await Promise.all(
    slugs.map(async ({ slug }) => {
      const content = await getMarkdownContent(contentType, slug);
      if (!content) return null;
      
      const { frontMatter, content: contentBody } = content;
      return {
        slug,
        frontMatter,
        excerpt: contentBody.slice(0, 200) + '...'
      };
    })
  );

  return content.filter(Boolean).sort((a, b) => {
    if (a?.frontMatter.date && b?.frontMatter.date) {
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
    }
    return 0;
  });
}
