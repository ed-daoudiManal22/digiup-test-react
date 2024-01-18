import { useState } from 'react';
import toast from 'react-hot-toast';


interface Props {
  onSubmit: (newFormValues: ProdFilter) => void;
}

const FormulaireRecherche = ({onSubmit}:Props) => {
  const [totalProduits, setTotalProduits] = useState(10);
  const [prixMinimum, setPrixMinimum] = useState<number>(0);
  const [prixMaximum, setprixMaximum] = useState<number>(1000);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({totalProduits, prixMinimum, prixMaximum})
  }

  return (
    <div className="flex items-center bg-gray-100 text-gray-900 p-4">
      <form onSubmit={handleSubmit} className="flex space-x-24 items-center justify-center flex-1">
        <div className="flex space-x-4 items-center">
          <label className="font-lg font-bold" htmlFor="totalProduits">
            Nombre de produits :{' '}
          </label>
          <input
            value={totalProduits}
            id="totalProduits"
            className="h-8 rounded-md w-24 text-black text-xl font-semibold text-center"
            name="totalProduits"
            type='number'
            onChange={(e) => {
              const inputValue = Number(e.target.value);
          
              // Check if the input is a positive number
              if (!isNaN(inputValue) && inputValue >= 0) {
                setTotalProduits(inputValue);
              }else {
                // Afficher un toast d'erreur
                toast.error("Veuillez entrer un nombre positif.");
              }
            }}
          />
        </div>
        <div className="flex space-x-20">
          <div className="flex space-x-1 items-center">
            <label className="font-lg font-bold" htmlFor="prixMinimum">
              Prix minimum
            </label>
            <button
              className="w-8 h-8 bg-orange-400 text-xl rounded-md font-extrabold"
              type="button"
              onClick={() => prixMinimum>10?setPrixMinimum(prixMinimum - 10):setPrixMinimum(0)}
            >
              -
            </button>
            <input
              id="prixMinimum"
              value={prixMinimum}
              className="h-8 rounded-md bg-white w-24 p-2 text-xl text-center"
              name="prixMinimum"
              onChange={(e) => {
                const inputValue = Number(e.target.value);
            
                // Check if the input is a positive number
                if (!isNaN(inputValue) && inputValue >= 0) {
                  setPrixMinimum(inputValue);
                  if(prixMaximum <= inputValue){
                    setprixMaximum(inputValue)
                  }
                }else {
                  // Afficher un toast d'erreur
                  toast.error("Veuillez entrer un nombre positif.");
                }
              }
              }
            />
            <button
              className="w-8 h-8 bg-orange-500 text-xl rounded-md font-extrabold"
              type="button"
              onClick={() =>{
                if(prixMinimum >= prixMaximum){
                  setprixMaximum(prixMinimum+10)
                }
                setPrixMinimum(prixMinimum + 10)

              } }
            >
              +
            </button>
          </div>
          <div className="flex space-x-1 items-center">
            <label className="font-lg font-bold" htmlFor="prixMaximum">
              Prix Maximum
            </label>
            <button
              className="w-8 h-8 bg-orange-400 text-2xl rounded-md font-extrabold"
              type="button"
              onClick={() => prixMaximum>(prixMinimum+10)? setprixMaximum(prixMaximum - 10):setprixMaximum(prixMinimum)}
            >
              -
            </button>
            <input
              id="prixMaximum"
              value={prixMaximum}
              className="h-8 bg-white rounded-md w-24 p-2 text-xl text-center "
              name="prixMaximum"
              onChange={(e) => {
                const inputValue = Number(e.target.value);
            
                // Check if the input is a positive number
                if (!isNaN(inputValue) && inputValue >= 0) {
                  setprixMaximum(inputValue);
                  if(prixMinimum >= inputValue){
                    setPrixMinimum(inputValue)
                  }
                }else {
                  // Afficher un toast d'erreur
                  toast.error("Veuillez entrer un nombre positif.");
                }
              }
              }
            />
            <button
              className="w-8 h-8 bg-orange-500 text-2xl rounded-md font-extrabold"
              type="button"
              onClick={() => setprixMaximum(prixMaximum + 10)}
            >
              +
            </button>
          </div>
        </div>

        <input
          className="px-4 cursor-pointer font-bold py-1 text-white text-xl bg-green-600 rounded-lg"
          value="Rechercher"
          type="submit"
        />
      </form>
    </div>
  );
};

export default FormulaireRecherche;
