const options = [
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "yearly", label: "Yearly" },
];

const customStyles = {
  control: (base, { isFocused }) => ({
    ...base,
    background: "#fff",
    width: "130px",
    // match with the menu
    borderRadius: isFocused ? "3px 3px 0 0" : 3,
    // Overwrittes the different states of border
    borderColor: isFocused ? "#FF5701" : "#e9e9e9",
    cursor: "pointer",
    // Removes weird border around container
    boxShadow: isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: isFocused ? "#FF5701" : "#FF5701",
    },
  }),
  menu: (base) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
    background: "#FF5701",
  }),
  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
    background: "#fff",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "#FF5701" : "#fff",
      color: isSelected ? "#fff" : "#000",
      cursor: "pointer",
      "&:hover": {
        // Overwrittes the different states of border
        backgroundColor: isFocused ? "#ffc8ad" : "#fff",
        color: isFocused ? "#fff" : "#000",
      },
    };
  },
};

export { options, customStyles };
