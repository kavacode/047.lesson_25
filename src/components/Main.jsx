import React, { useState } from 'react';
import cardsData from '../data/cardsData';
import Card from './Card';
import CongratulationModal from './CongratulationModal';
import './Main.css';

const Main = () => {
  const [cards, setCards] = useState(cardsData);
  const [showModal, setShowModal] = useState(false);
  const [randomCard, setRandomCard] = useState(null);

  const generateRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];
    setRandomCard(selectedCard);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addNewCard = (newCard) => {
	setCards([...cards, newCard]);
	closeModal();
 };

  return (
    <main>
      <button onClick={generateRandomCard}>Generate Congratulation</button>
      <button onClick={openModal}>Create New Congratulation</button>
      {randomCard && <Card card={randomCard} />}

      <CongratulationModal
        showModal={showModal}
        closeModal={closeModal}
        addNewCard={addNewCard}
      />
    </main>
  );
};

export default Main;
