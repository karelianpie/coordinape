import { GraphQLTypes } from './gql/__generated__/zeus';

type OperationTypes = 'INSERT' | 'UPDATE' | 'DELETE' | 'MANUAL';

// This is not an exhaustive list of all object and array relation types,
// and should be added to
// as more relationships are encountered in the GQL api.
// Only scalar types are returned by event triggers, so this is needed
// to strip out faulty types from the autogenerated zeus types
//
// Maybe one day typescript will allow us to pick based on the type of
// the parameter, but this doesn't exist for now.
type RelationTypes =
  | 'burns'
  | 'burns_aggregate'
  | 'circle_metadata'
  | 'circle'
  | 'gift_private'
  | 'received_gifts'
  | 'received_gifts_aggregate'
  | 'pending_received_gifts'
  | 'pending_received_gifts_aggregate'
  | 'sent_gifts'
  | 'sent_gifts_aggregate'
  | 'pending_sent_gifts'
  | 'pending_sent_gifts_aggregate'
  | 'epoch'
  | 'recipient'
  | 'sender'
  | 'nominator'
  | 'user'
  | 'profile'
  | 'nominations'
  | 'nominations_aggregate'
  | 'vouches';

/**
 * G should be the table from which the event originated
 * O should be the operation on the table that triggered the event
 */
export interface EventTriggerPayload<
  G extends keyof GraphQLTypes,
  O extends OperationTypes = OperationTypes
> {
  event: {
    session_variables: { [x: string]: string };
    op: O;
    data: {
      old: O extends 'INSERT'
        ? O extends 'UPDATE' | 'DELETE'
          ? Omit<GraphQLTypes[G], RelationTypes> | null
          : null
        : O extends 'MANUAL'
        ? O extends 'UPDATE' | 'DELETE'
          ? Omit<GraphQLTypes[G], RelationTypes> | null
          : null
        : Omit<GraphQLTypes[G], RelationTypes>;
      new: O extends 'DELETE' ? null : Omit<GraphQLTypes[G], RelationTypes>;
    };
    trace_context: {
      trace_id: string;
      span_id: string;
    };
  };
  created_at: string;
  id: string;
  delivery_info: { max_retries: number; current_retry: number };
  trigger: {
    name: string;
  };
  table: {
    schema: string;
    name: string;
  };
}
