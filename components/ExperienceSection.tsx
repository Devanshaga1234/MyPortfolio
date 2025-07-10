interface ExperienceSectionProps {
  title: string;
  position: string;
  location?: string;
  date?: string;
  description: string[];
}

export default function ExperienceSection({ 
  title, 
  position, 
  location, 
  date, 
  description 
}: ExperienceSectionProps) {
  return (
    <div className="mb-12 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-primary font-medium">{position}</p>
          {location && <p className="text-muted-foreground">{location}</p>}
        </div>
        {date && <p className="text-muted-foreground mt-2 md:mt-0">{date}</p>}
      </div>
      
      <div>
        <ul className="list-disc pl-5 space-y-3">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
