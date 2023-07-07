/*eslint-disable react/prop-types */

function Button({ children, type, onClick }) {
  const styles = {
    small:
      'bg-sky-900 cursor-pointer uppercase px-3 py-0.5 rounded-md',
    transaction:
      'w-full h-14 bg-sky-600 cursor-pointer font-semibold text-xl',
  };

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
