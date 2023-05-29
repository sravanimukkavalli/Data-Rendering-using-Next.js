import { useEffect, useState } from "react";

export default function Server() {
  const [head, setHead] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getData = async () => {
        const response = await fetch("/api/data", { method: "POST" });
        const data = await response.json();
        setDescription(data.description);
        setHead(data.head);
        setImage(data.image);
    };
        getData();
  });


  return (
    <div className="flex flex-col items-center">
      <h5 className="text-md font-mono pt-2">{head}</h5>
      <img
        src={image}
        alt="Server"
        className="w-3/6 h-auto pt-8"
      />
      <p className="w-5/6 pt-2 font-sans ">
        {description}
      </p>
    </div>
  );
}
