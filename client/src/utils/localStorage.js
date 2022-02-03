export const getSavedVaxCard= () => {
  const savedVaxCardsId = localStorage.getItem("saved_cards")
    ? JSON.parse(localStorage.getItem("saved_cards"))
    : [];

  return savedVaxCardsId;
};

export const saveVaxCardIds = (cardIdArr) => {
  if (cardIdArr.length) {
    localStorage.setItem("saved_cards", JSON.stringify(cardIdArr));
  } else {
    localStorage.removeItem("saved_cards");
  }
};

export const removeVaxCardId = (cardId) => {
  const savedVaxCardIds = localStorage.getItem("saved_cards")
    ? JSON.parse(localStorage.getItem("saved_cards"))
    : null;

  if (!savedVaxCardIds) {
    return false;
  }

  const updatedSavedVaxCardIds = savedVazCardIds?.filter(
    (savedVaxCardId) => savedVaxCardId !== cardId
  );
  localStorage.setItem("saved_cards", JSON.stringify(updatedSavedVaxCardIds));

  return true;
};
