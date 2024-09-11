import { mainApi } from "@/shared/api/api";
import { BrouthTicketsInfo, UserInfo } from "@/shared/types";

export const userApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserInfo, void>({
      query: () => `/user/me`,
    }),
    getTicketsBroughtByUser: builder.query<BrouthTicketsInfo[], void>({
      query: () => `user/tickets`,
    }),
  }),
});
