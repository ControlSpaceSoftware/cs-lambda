import {parseEventBody} from './parseEventBody'
import {parseEventParams} from './parseEventParams'
import {parseEventUserInfo} from './parseEventUserInfo'

export function parseEvent(event) {

	return Object.assign({}, parseEventBody(event), parseEventParams(event), parseEventUserInfo(event));

}
