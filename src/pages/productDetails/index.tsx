import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const ProductDetails = (props: Props) => {
    const {id} = useParams()
    const [loading, setLoading] = React.useState<boolean>(false)
    const [product, setProduct] = React.useState<Produit>()

    const fetchProduct = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(response.data)
            console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        
        setLoading(false)
    }

    useEffect(() => {
        fetchProduct()
    }, [])
  return (
    <div>
    {loading ? (
      <h1 className="text-4xl text-center text-gray-700">Chargement...</h1>
    ) : (
      <div className="text-black max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md mt-16">
        <div className="flex flex-col items-center p-8">
          <img
            src={product?.image}
            alt=""
            className="w-72 h-72 object-cover mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{product?.title}</h1>
          <p className="text-lg text-gray-500 mb-2">{product?.category}</p>
          <p className="text-2xl font-bold mb-4">{product?.price}€</p>
          <div className="flex items-center">
            <p className="text-xl mr-2">{product?.rating.rate} / 5</p>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  className={`w-6 h-6 fill-current ${
                    index < Math.floor(product?.rating.rate ?? 0) ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c-.3 0-.5.1-.7.3L9 5.5 3.2 6.5c-.6.1-1.1.6-1.3 1.2s-.1 1.3.3 1.8l4.2 4 1 5.6c.1.7.7 1.2 1.4 1.2H12c.7 0 1.3-.5 1.4-1.2l1-5.6 4.2-4c.5-.5.6-1.2.3-1.8s-1-1-1.6-1.2L14 5.5l-2.3-3.2c-.2-.2-.4-.3-.7-.3zM12 19.6l-3.2-1.9-1 .1c-.4 0-.7-.2-.9-.5s-.3-.7-.2-1.1l.8-4.6-3.5-3.2c-.3-.3-.4-.7-.3-1.1s.3-.7.7-.9l4.6-.7 2-4.1c.3-.6 1.1-.9 1.7-.6.6.3.9 1.1.6 1.7l-2 4.2 4.5.6c.7.1 1.3.5 1.6 1.1s.2 1.3-.2 1.9L15.5 18l-.9 3.1c-.2.7-.8 1.3-1.5 1.5-.3.1-.7.1-1 0zm-1.8-6.1c.3 0 .7.1 1 .3L12 15.8l1.8-1c.3-.2.7-.3 1-.3s.7.1 1 .3l1.8 1-1.7 1c-.3.2-.7.3-1 .3s-.7-.1-1-.3l-1.8-1 1.7-1c.3-.2.7-.3 1-.3z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  
  )
}

export default ProductDetails