import { MemberType } from "@/lib/types";

export default function Member({ image, name, post }: MemberType) {
  return (
    <div className="font-eightBit flex flex-col justify-center items-center gap-5 text-white">
      <div className=" h-60 w-60 border-4 border-white bg-gray-500 drop-shadow-member"></div>
      <h3 className="  text-4xl"> {name} </h3>
      <p className=" text-xl  opacity-50 -mt-5"> {post} </p>
    </div>
  );
}
