interface CardProps {
  autor: string;
  title: string;
  subtitle: string;
  backgroundImg: string;
}

const Card = ({ item }: { item: CardProps }) => {
  return (
    <div className="flex flex-col p-1 rounded">
      <div className="group relative w-full h-[500px] shadow-md hover:shadow-lg hover:bg-slate-100 transition-all hover:cursor-pointer duration-300">
        <div>
          <img src={item.backgroundImg} alt={item.title} />
        </div>

        <div className="flex flex-col justify-end p-4">
          <h4 className="text-xl font-semibold text-black">{item.title}</h4>
          <h5 className="text-sm">{item.autor}</h5>
          <p className="text-sm mt-1">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
