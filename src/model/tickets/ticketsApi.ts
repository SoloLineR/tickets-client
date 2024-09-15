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
    validateTicket: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: "/pdf/validate",
        method: "POST",
        body: { activated_id: id },
      }),
    }),
  }),
  overrideExisting: true,
});
