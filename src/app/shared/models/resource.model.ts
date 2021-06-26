import { SummaryModel } from './summary.model';

export type ResourceModel = {
  available: number,
  collectionURI: string,
  items: SummaryModel[],
  returned: number
};
