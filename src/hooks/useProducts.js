import { useState, useEffect } from 'react'

const useProducts = (seriesName) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(`/${seriesName}.json`)
        
        if (!response.ok) {
          throw new Error(`Failed to load ${seriesName} products`)
        }
        
        const data = await response.json()
        
        let productsArray = []
        if (data.products && Array.isArray(data.products)) {
          productsArray = data.products
        } else if (Array.isArray(data)) {
          productsArray = data
        } else {
          throw new Error('Invalid JSON structure')
        }
        
        const processedProducts = productsArray.map((product, index) => ({
          id: product.id || index,
          name: product.name || 'Product',
          description: product.description || '',
          image: product.image || product['hover-image'] || '',
          'hover-image': product['hover-image'] || product.image || '',
          // Normalize URL: if it's '#' or invalid, set to null
          url: product.url && product.url !== '#' && product.url !== '' ? product.url : null,
          material: product.material || '',
          finish: product.finish || '',
          // Add toast message from product data or use default
          toastMessage: product.toastMessage || 'Contact us to know more details',
          ...product
        }))
        
        setProducts(processedProducts)
      } catch (error) {
        console.error(`Error loading ${seriesName} products:`, error)
        setError(error.message)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    if (seriesName) {
      loadProducts()
    }
  }, [seriesName])

  return { products, loading, error }
}

export default useProducts
