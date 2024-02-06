import Image from "next/image";
const NoTickets = () => {
  return (
    <div className="flex flex-col mt-10 justify-center items-center">
      <h2 className="text-blue-500">No Tickets Available...</h2>
      <Image
        src="/empty-folder.png"
        width={500}
        height={500}
        alt="Picture of the empty cart"
      />
    </div>
  );
};

export default NoTickets;
