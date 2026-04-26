function Button({ label, children, size, rounded,icon, className, ...rest }) {
  let sizeClss = "px-6 py-2";
  if (size == "xs") {
    sizeClss = "px-1 py-1";
  } else if (size == "sm") {
    sizeClss = "px-2 py-1";
  } else if (size == "lg") {
    sizeClss = "px-8 py-4";
  }

  let classes = `hover:bg-amber-500 disabled:bg-amber-200 disabled:cursor-no-drop  capitalize   border border-gray-300 bg-amber-700 text-white ${rounded ? "rounded-4xl" : ""} ${sizeClss} `;

  classes += className;

  return (
    <button
      {...rest}
      // onClick={onClick}
      className={classes}
    >
      {icon}
      {label}
      {children}
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
