import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  events?: EventUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
};
