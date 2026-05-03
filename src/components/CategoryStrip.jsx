import { Link } from "react-router-dom";
import {
  Stethoscope,
  Pill,
  Leaf,
  HeartPulse,
  Activity,
  Wind,
} from "lucide-react";

const categories = [
  {
    title: "Dermatology",
    slug: "dermatology",
    icon: Stethoscope,
  },
  {
    title: "General Medicines",
    slug: "general-medicines",
    icon: Pill,
  },
  {
    title: "Wellness",
    slug: "wellness",
    icon: Leaf,
  },
  {
    title: "Gastro Care",
    slug: "gastro-care",
    icon: HeartPulse,
  },
  {
    title: "Pain Relief",
    slug: "pain-relief",
    icon: Activity,
  },
  {
    title: "Respiratory Care",
    slug: "respiratory-care",
    icon: Wind,
  },
];

function CategoryStrip() {
  return (
    <section className="category-section">
      <div className="container category-strip">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              to={`/products/${category.slug}`}
              className="category-card"
              key={category.title}
            >
              <Icon size={30} />
              <span>{category.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryStrip;