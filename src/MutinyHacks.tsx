import { record, EventType } from 'rrweb';

const URL = 'https://app.mutiny.local/rrweb';


const sendEvent = async (event: EventType) => {
  try {
    const response = await window.fetch(URL, {
      mode: 'no-cors',
      body: JSON.stringify({
        visitorToken: "7999950e-746e-4fe7-b6da-33d870e99c12",
        impressionToken: '7999950e-746e-4fe7-b6da-33d870e99c13',
        sessionToken: '7999950e-746e-4fe7-b6da-33d870e99c14',
        event
      }),
      method: 'POST',
      keepalive: true,
    });
    console.log('response', response);
  } catch (e) {
    console.log('e', e);
  }
};

// 1. Session token to aggregate all the events
// 2. Visitor token to sync to a visitor

export class RrWebClient {
  public constructor() {
  }

  public record() {
    record({
      emit(event: EventType) {
        sendEvent(event);
      },
    });
  }
}
