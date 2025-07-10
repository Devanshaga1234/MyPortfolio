import { ReactNode } from 'react';

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
}

export default function ProjectSection({ title, children }: ProjectSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">{title}</h2>
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
}
