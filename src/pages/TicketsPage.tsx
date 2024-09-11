import Loader from "@/components/Loader";
import TicketList from "@/components/TicketList";
import { ticketsApi } from "@/model/tickets/ticketsApi";

export default function TicketsPage() {
  const { data: tickets } = ticketsApi.useGetTicketsQuery();

  if (!tickets) {
    return <Loader />;
  }

  return (
    <div className="pt-5">
      <TicketList tickets={tickets} />
    </div>
  );
}
