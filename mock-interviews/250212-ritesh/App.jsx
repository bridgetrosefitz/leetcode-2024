import { data } from "./App.constants";
import "./restaurantsPage.css";
import { useEffect, useMemo, useState } from "react";

const RestaurantsPage = () => {
  const SORT_ATTRIBUTES = ["location", "name", "eta", "rating"];
  const DEFAULT_SORT_ATTRIBUTE = "eta";
  const DEFAULT_RATING_FILTER = 4;
  const [sortAttribute, setSortAttribute] = useState(DEFAULT_SORT_ATTRIBUTE);
  const [ratingFilter, setRatingFilter] = useState(DEFAULT_RATING_FILTER);

  useEffect(() => {
    console.log("ratingFilter", ratingFilter);
  }, [ratingFilter]);

  const sortedRestaurants = useMemo(
    () =>
      [...data].sort((a, b) => (a[sortAttribute] < b[sortAttribute] ? -1 : 1)),
    [sortAttribute]
  );

  const filteredRestaurants = useMemo(
    () =>
      sortedRestaurants.filter(
        restaurant => Math.floor(restaurant.rating) === ratingFilter
      ),
    [sortedRestaurants, ratingFilter]
  );

  const restaurants = filteredRestaurants.map(restaurant => {
    return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
  });

  const handleSelectSortAttribute = attribute => {
    setSortAttribute(attribute);
  };

  const handleSetRatingFilterAttribute = (selector, selection) => {
    console.log("selection", selection);
    setRatingFilter(selection);
  };

  return (
    <>
      <SortButtons
        selectedAttribute={sortAttribute}
        attributes={SORT_ATTRIBUTES}
        selectAttribute={handleSelectSortAttribute}
      />

      {/* 
      
      
      */}
      <FilterButtons
        options={[1, 2, 3, 4, 5]}
        selectedFilter={ratingFilter}
        selectFilter={handleSetRatingFilterAttribute}
      />
      {restaurants.length ? (
        <div className="restaurants-container">{restaurants}</div>
      ) : (
        "No restaurants correspond to selected filter"
      )}
    </>
  );
};

const RestaurantCard = ({ restaurant }) => {
  // TO DO: Destructure attributes of restaurant
  return (
    <div className="restaurant-card">
      <h4>{restaurant.name}</h4>
      <p>{restaurant.rating}</p>
      <p>ETA: {restaurant.eta}</p>
      <p>{restaurant.location}</p>
      <div>
        {restaurant.tags.map(tag => (
          <span key={tag} className="restaurant-tag">
            {tag}
          </span>
        ))}
      </div>
      <span className="favorite-star">{restaurant.favorite ? "★" : "☆"}</span>
    </div>
  );
};

const SortButtons = ({ attributes, selectAttribute, selectedAttribute }) => {
  const attributeButtons = attributes.map(attribute => (
    <button
      className={
        attribute === selectedAttribute ? "selected-sort-attribute" : ""
      }
      key={attribute}
      onClick={() => selectAttribute(attribute)}
    >
      {attribute}
    </button>
  ));
  return <div>Sort by: {attributeButtons}</div>;
};

const FilterButtons = ({
  options,
  attributeSelector,
  selectFilter,
  selectedFilter,
}) => {
  const optionButtons = options.map(option => (
    <button
      className={option === selectedFilter ? "selected-filter-option" : ""}
      key={option}
      onClick={() => selectFilter("rating", option)}
    >
      {option}
    </button>
  ));
  return <div>Filter by rating: {optionButtons}</div>;
};

export default RestaurantsPage;
