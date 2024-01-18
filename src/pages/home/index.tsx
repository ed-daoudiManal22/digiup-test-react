import { useState } from 'react';
import FormulaireRecherche from '../../components/formulaire-recherche';
import Produits from '../../components/produits';



const HomePage = () => {
  const [formValues, setFormValues] = useState<ProdFilter>({
    totalProduits: 10,
    prixMinimum: 0,
    prixMaximum: 1000,
  });
  const upDateFormValues = (newFormValues: ProdFilter) => {
    setFormValues(newFormValues );
  }
  return (
    <>
      <FormulaireRecherche onSubmit={upDateFormValues} />
      <Produits filter={formValues}/>
    </>
  );
};

export default HomePage;
