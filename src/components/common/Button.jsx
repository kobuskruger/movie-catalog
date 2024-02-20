function Button({ children, ...props }) {
  return (
    <button
      className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
