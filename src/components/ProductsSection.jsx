import { motion } from "framer-motion";
import { productCategories } from "../data/products";

function ProductsSection() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Our Products</p>
          <h2>Explore ATRO Labs product categories</h2>
        </div>

        <div className="products-grid">
          {productCategories.map((product, index) => (
            <motion.div
              className="product-card"
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="product-image-placeholder">
                Image Placeholder
              </div>

              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;