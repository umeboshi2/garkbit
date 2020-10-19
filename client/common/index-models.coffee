import NoCacheModel from './nocache-model'

export class CvLinks extends NoCacheModel
  url: '/assets/documents/cvlinks.json'

export class EventIndex extends NoCacheModel
  url: '/assets/events/index.json'

export cvlinks = new CvLinks
export eventIndex = new EventIndex


indexModels =
  cvlinks: cvlinks
  eventIndex: eventIndex


  
export default indexModels
