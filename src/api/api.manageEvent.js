
import EndPointConfig from "../utils/endPointConfig";

export async function createEvent(data, header) {
    const url = EndPointConfig.ManageEvent.createEvent;
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: header
        })

        alert(JSON.stringify(response))

        return {
            status: response.ok,
            data: await response.json()
        }
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}