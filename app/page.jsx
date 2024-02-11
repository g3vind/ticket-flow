import NoTickets from "./(components)/NoTickets";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    // return NextResponse.json({ message: "Error", error }, { status: 500 });
    console.log("failed to get tickets data", error);
  }
};

const Dashboard = async () => {
  const data = await getTickets();

  if (!data?.tickets) {
    return <NoTickets />;
  }
  const tickets = data.tickets;

  const uniqueCategories = [
    ...new Set(tickets.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h3> {uniqueCategory}</h3>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
