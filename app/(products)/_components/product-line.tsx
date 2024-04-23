type ProductLine = {
  name: string;
  price: number;
};

export const ProductLine = ({ name, price }: ProductLine) => {
  return (
    <div className="flex flex-row justify-between gap-4">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};
