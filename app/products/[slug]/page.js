import fs from 'fs';
import path from 'path';

export default async function Page({ params }) {
  const { slug } = await params;
  console.log("Slug:", slug);
  const { default: Product } = await import(`@/content/products/${slug}.mdx`)

  return (
    <main className=''>
      <article className="px-4 py-32 mx-auto w-full max-w-3xl">
        <Product />
      </article>
    </main>
  );
}

const getChapterNames = () => {
  const contentDir = path.join(process.cwd(), 'content/products');
  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export async function generateStaticParams() {
  return getChapterNames().map((slug) => ({ slug }));
}

export const dynamicParams = false