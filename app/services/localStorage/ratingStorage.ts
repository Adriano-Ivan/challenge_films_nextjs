import { CONSTANTS_VALUES } from "@infrastructure/values";

export const getFilmsRatingsRegister = () => {
  const item = localStorage.getItem(
    CONSTANTS_VALUES.LOCAL_STORAGE_RATING_ITEM_NAME
  );

  if (item) {
    const itemObj = JSON.parse(item);
    return itemObj;
  }

  return null;
};

export const getFilmRatingRegister = (imbdId: string) => {
  const obj = getFilmsRatingsRegister();

  if (obj && Object.keys(obj).includes(imbdId)) {
    return obj[imbdId] as number;
  }

  return null;
};

export const createFilmRatingRegister = (imdbId: string, rating: number) => {
  try {
    const ratingsObj = getFilmsRatingsRegister();

    if (ratingsObj) {
      ratingsObj[imdbId] = rating;
      localStorage.setItem(
        CONSTANTS_VALUES.LOCAL_STORAGE_RATING_ITEM_NAME,
        JSON.stringify(ratingsObj)
      );
    } else {
      localStorage.setItem(
        CONSTANTS_VALUES.LOCAL_STORAGE_RATING_ITEM_NAME,
        JSON.stringify({ [`${imdbId}`]: rating })
      );
    }

    return { imdbId, rating };
  } catch {
    return null;
  }
};
