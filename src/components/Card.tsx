interface CardProps {
  autor: string;
  title: string;
  subtitle: string;
  backgroundImg: string;
}

const Card = ({ item } : { item : CardProps}) => {
  return (
    <div className="p-2 border border-slate-400">
      <div className="group relative h-80 w-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.backgroundImg})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300" />
        <div className="relative z-10 flex h-full flex-col justify-end p-4 text-white">
          <h4 className="text-xl font-semibold">{item.title}</h4>
          <h5 className="text-sm text-gray-300">{item.autor}</h5>
          <p className="text-sm mt-1">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
