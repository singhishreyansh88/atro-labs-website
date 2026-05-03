import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Package, FlaskConical } from "lucide-react";
import { productCategories, products } from "../data/products";

function ProductCategory() {
  const { categorySlug } = useParams();

  const category = productCategories.find(
    (item) => item.slug === categorySlug
  );

  const filteredProducts = products.filter(
    (product) => product.category === categorySlug
  );

  if (!category) {
    return (
      <section className="page-section">
        <div className="container">
          <p className="section-label">Products</p>
          <h1>Category not found.</h1>
          <Link to="/products" className="back-link">
            <ArrowLeft size={18} /> Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section product-listing-page">
      <div className="container">
        <Link to="/products" className="back-link">
          <ArrowLeft size={18} /> Back to Product Categories
        </Link>

        <div className="product-listing-header">
          <div>
            <p className="section-label">Product Catalogue</p>
            <h1>{category.title}</h1>
            <p>{category.description}</p>
          </div>

          <div className="listing-count-card">
            <strong>{filteredProducts.length}</strong>
            <span>Products</span>
          </div>
        </div>

        <div className="product-list-grid">
          {filteredProducts.map((product, index) => (
            <motion.article
              className="listed-product-card"
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="listed-product-image">
                Product Image
              </div>

              <div className="listed-product-content">
                <h3>{product.itemName}</h3>

                <div className="product-meta">
                  <div>
                    <FlaskConical size={18} />
                    <span>Composition</span>
                  </div>
                  <p>{product.composition}</p>
                </div>

                <div className="product-meta">
                  <div>
                    <Package size={18} />
                    <span>Packaging</span>
                  </div>
                  <p>{product.packaging}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategory;