function Button(props) {
  return (
    <button className="hover:bg-amber-500 capitalize  px-6 py-2 border border-gray-300 bg-amber-700 text-white ">
      {props.label}
    </button>
  );
}

export function SmallButton(props) {
  return (
    <button className="hover:bg-amber-500 text-sm capitalize mt-4 px-2 py-1 border border-gray-300 bg-amber-700 text-white ">
      {props.label}
    </button>
  );
}

export function RoundedButton(props) {
  return (
    <button className="hover:bg-amber-500 capitalize mt-4 px-6 py-2 rounded-4xl border border-gray-300 bg-amber-700 text-white ">
      {props.label}
    </button>
  );
}

export default Button;
