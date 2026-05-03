import {
  Stethoscope,
  Pill,
  Leaf,
  HeartPulse,
  Activity,
  Wind,
} from "lucide-react";

const categories = [
  { title: "Dermatology", icon: Stethoscope },
  { title: "General Medicines", icon: Pill },
  { title: "Wellness", icon: Leaf },
  { title: "Gastro Care", icon: HeartPulse },
  { title: "Pain Relief", icon: Activity },
  { title: "Ayurveda", icon: Wind },
];

function CategoryStrip() {
  return (
    <section className="category-section">
      <div className="container category-strip">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div className="category-card" key={category.title}>
              <Icon size={30} />
              <span>{category.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryStrip;