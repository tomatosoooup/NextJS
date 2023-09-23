import { nanoid } from "nanoid";

interface NumbersProps {
  containerClass: string;
  spanClass: string;
  nums: number[];
}

const Numbers: React.FC<NumbersProps> = ({
  containerClass,
  spanClass,
  nums,
}) => {
  const numbers = nums.map((num) => (
    <span className={spanClass} key={nanoid()}>
      {num}
    </span>
  ));

  return (
    <div
      className={`
    absolute
    hidden
    lg:flex
    items-center 
    justify-center
    flex-col 
    gap-5 
    text-[#D3D3D3]
    ${containerClass}`}
    >
      {numbers}
    </div>
  );
};

export default Numbers;
