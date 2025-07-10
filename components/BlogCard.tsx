import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  coverImage?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
  coverImage = '/images/blog-placeholder.jpg',
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-5">
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(date)}
          </time>
          <h3 className="text-xl font-bold mt-1 mb-2 hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
            {excerpt}
          </p>
          <p className="mt-4 text-primary font-medium">Read more →</p>
        </div>
      </article>
    </Link>
  );
}
