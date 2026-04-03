import Button from "./Button";

export function CourseItem(props) {
  console.log("props is ", props);
  return (
    <li className="relative border border-gray-400 hover:shadow hover:shadow-amber-400">
      <img
        src="https://placehold.co/200x200"
        className="w-full aspect-video object-cover"
      />
      <div className="p-4 flex flex-col items-center">
        <p className="text-2xl  capitalize mt-4 font-medium">{props.title}</p>
        <p className="text-xl mt-4 font-medium">US ${props.price}</p>
        <p className="text-xl mt-4 font-medium">{props.duration}</p>
        <Button label="learn more" />
      </div>
    </li>
  );
}
