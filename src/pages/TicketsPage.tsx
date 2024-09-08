import TicketList from "@/components/TicketList";
const tickets = [
  {
    id: 1,
    title: "The International",
    description: "DOTA 2 CHAMPIONSHIP",
    amount: 50,
    price: 1000,
    img: "https://utfs.io/f/79394bda-cd40-46fd-b353-4e206512bc2c-1k27.png",
  },
  {
    id: 2,
    title: "League of Legends World Championship",
    description: "The biggest event in League of Legends",
    amount: 100,
    price: 1200,
    img: "https://example.com/lol-championship.png",
  },
  {
    id: 3,
    title: "CS:GO Major",
    description: "Counter-Strike: Global Offensive   Tournament",
    amount: 75,
    price: 900,
    img: "https://example.com/csgo-major.png",
  },
  {
    id: 4,
    title: "Overwatch League Finals",
    description: "The final showdown of the Overwatch League",
    amount: 60,
    price: 1100,
    img: "https://example.com/overwatch-finals.png",
  },
  {
    id: 5,
    title: "Rainbow Six Siege Major",
    description: "Top teams compete in Rainbow Six Siege",
    amount: 40,
    price: 800,
    img: "https://example.com/r6-major.png",
  },
  {
    id: 6,
    title: "PUBG Global Championship",
    description: "The ultimate battle royale championship",
    amount: 30,
    price: 700,
    img: "https://example.com/pubg-championship.png",
  },
  {
    id: 7,
    title: "Valorant Masters",
    description: "The elite tournament for Valorant",
    amount: 50,
    price: 950,
    img: "https://example.com/valorant-masters.png",
  },
  {
    id: 8,
    title: "FIFA eWorld Cup",
    description: "The premier FIFA esports tournament",
    amount: 20,
    price: 600,
    img: "https://example.com/fifa-eworldcup.png",
  },
  {
    id: 9,
    title: "Apex Legends Global Series",
    description: "Competitive Apex Legends tournament",
    amount: 25,
    price: 750,
    img: "https://example.com/apex-legends.png",
  },
  {
    id: 10,
    title: "Street Fighter V Championship",
    description: "The ultimate fighting game showdown",
    amount: 15,
    price: 500,
    img: "https://example.com/street-fighter.png",
  },
];

export default function TicketsPage() {
  return (
    <div className="pt-5">
      <TicketList tickets={tickets} />
    </div>
  );
}
