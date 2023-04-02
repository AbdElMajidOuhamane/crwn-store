import { useContext } from "react"
import ProductCard from "../../components/product-card/product-card.components"
import { CategoriesContext } from "../../contexts/categories.context"
import CategoryPreview from "../../components/category-preview/category-preview.component"


const CategoriesPreview = () => {
    const {categoriesMap}=useContext(CategoriesContext)
  return (
    <>
      
        {
          Object.keys(categoriesMap).map(title=>{
            const products=categoriesMap[title];
            return <CategoryPreview key={title} title={title} products={products} />
          }
           
          )
        }
      
    {/* <div className="products-container">
        
    </div> */}
    </>
  )
}

export default CategoriesPreview