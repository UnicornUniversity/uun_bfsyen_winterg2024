function Header({ setOverviewList }) {
  return (
    <button
      onClick={() =>
        setOverviewList((currentValue) => {
          currentValue.push({ id: Math.random(), name: Math.random() });
          return currentValue.slice();
        })
      }
    >
      create
    </button>
  );
}

export default Header;
