import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { productCategories, products } from "../data/products";

import dermatImg from "../assets/category/dermat.jpg";
import gastroImg from "../assets/category/gastro.jpg";
import generalImg from "../assets/category/general.jpg";
import painImg from "../assets/category/pain.jpg";
import respiratoryImg from "../assets/category/respiratory.jpg";
import wellnessImg from "../assets/category/wellness.jpg";

const categoryImages = {
  dermatology: dermatImg,
  "general-medicines": generalImg,
  wellness: wellnessImg,
  "gastro-care": gastroImg,
  "pain-relief": painImg,
  "respiratory-care": respiratoryImg,
};

function ProductsSection() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Our Products</p>
          <h2>Explore ATRO Labs product categories</h2>
        </div>

        <div className="products-grid">
          {productCategories.map((category, index) => {
            const count = products.filter(
              (product) => product.category === category.slug
            ).length;

            return (
              <motion.div
                className="product-card category-product-card"
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link to={`/products/${category.slug}`}>
                  <div className="product-image-placeholder category-product-image-wrap">
                    <img
                      src={categoryImages[category.slug]}
                      alt={category.title}
                      className="category-product-image"
                    />
                  </div>

                  <div className="category-card-content">
                    <span className="product-count">{count} Products</span>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>

                    <span className="view-category-link">
                      View Products <ArrowRight size={17} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
