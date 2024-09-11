import { mainApi } from "@/shared/api/api";
import { Ticket } from "@/shared/types";

export const ticketsApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getTickets: builder.query<Ticket[], void>({
      query: () => "/tickets",
    }),
    getTicket: builder.query<Ticket, number>({
      query: (id) => `/tickets/${id}`,
    }),
  }),
  overrideExisting: true,
});
