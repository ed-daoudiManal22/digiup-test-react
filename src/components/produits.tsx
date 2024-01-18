import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


interface Props {
  filter: ProdFilter;
}


const Produits = ({ filter }: Props) => {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchProduits = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${filter.totalProduits}`
      );
      setProduits(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProduits();
  }, [filter.totalProduits]);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortType = e.target.value;
    if (sortType === "1") {
      const sorted = [...produits].sort((a, b) => a.price - b.price);
      setProduits(sorted);
    } else if (sortType === "2") {
      const sorted = [...produits].sort((a, b) => b.price - a.price);
      setProduits(sorted);
    }
  };
  return (
    <div>
      <div className="flex justify-end pr-12 pt-6">
        <form>
          <select
            onChange={handleSort}
            className="px-2 border border-black text-black text-xl"
          >
            <option>Trier par :</option>
            <option value="1">Prix croissant</option>
            <option value="2">Prix décroissant</option>
          </select>
        </form>
      </div>
      {loading ? (
        <h1 className="text-4xl text-center">Chargement...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-16">
          {produits.map((produit) =>
            produit.price >= filter.prixMinimum &&
            produit.price <= filter.prixMaximum ? (
              <div
              key={produit.id}
                onClick={() => navigate(`/product/${produit.id}`)}
                className="flex flex-col space-y-2 bg-gray-50 p-4 drop-shadow-lg shadow-lg rounded-md"
              >
                <div className="text-xl h-32 text-gray-800 text-center font-extrabold">
                  {produit?.title}
                </div>
                <img
                  src={produit?.image}
                  className="w-full h-56 object-contain rounded-md mb-4"
                />

                <div className="flex items-center justify-between">
                  <div className="text-2xl text-orange-500 font-extrabold">
                    {produit?.price}€
                  </div>
                  <div className="text-md text-blue-800 font-extrabold">
                    avis : {produit?.rating.rate} / 5
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default Produits;
