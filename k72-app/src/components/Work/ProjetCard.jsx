function ProjetCard(props) {
  return (
    <>
      <div className="lg:w-1/2 group h-full relative bg-green-700 hover:rounded-4xl transition-all overflow-hidden">
        <img
          className="h-full w-full object-cover "
          src={props.image1}
          alt=""
        />
        <div className="w-full opacity-0 group-hover:opacity-100 transition-all h-full absolute top-0 left-0 hover:bg-black/25 flex items-center justify-center">
          <h2 className="font-[font2] text-white text-4xl rounded-full border-2 border-white p-2 px-2 leading-6 pb-0  uppercase ">
            Voir le Projets
          </h2>
        </div>
      </div>
      <div className="lg:w-1/2 group h-full relative bg-green-700 hover:rounded-4xl transition-all overflow-hidden">
        <img
          className="h-full w-full object-cover "
          src={props.image2}
          alt=""
        />
        <div className="w-full opacity-0 group-hover:opacity-100 transition-all h-full absolute top-0 left-0 hover:bg-black/25 flex items-center justify-center">
          <h2 className="font-[font2] text-white text-4xl rounded-full border-2 border-white p-2 px-2 leading-6 pb-0  uppercase ">
            Voir le Projets
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProjetCard;
