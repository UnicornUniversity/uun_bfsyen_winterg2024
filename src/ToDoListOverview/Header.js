function Header({ setToDoListList }) {
  return (
    <button
      onClick={() =>
        setToDoListList((currentValue) => {
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
