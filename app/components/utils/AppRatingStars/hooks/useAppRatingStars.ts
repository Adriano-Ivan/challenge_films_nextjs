import { useState } from "react";

export const useAppRatingStars = (
  defaultRating = 0,
  onChangeRating: (newRating: number) => void
) => {
  const [value, setValue] = useState(defaultRating);

  const changeValue = (newValue: number) => {
    if (newValue >= 1) {
      setValue(newValue);
      onChangeRating(newValue);
    }
  };

  return {
    value,
    changeValue,
  };
};
