import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "px-4 py-2.5 md:px-6 md:py-3.5 inline-block text-sm rounded-full bg-transparent border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 hover:text-stone-800 transition-colors duration-300 hover:bg-stone-300 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-stone-200 disabled:cursor-not-allowed focus:text-stone-800",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
