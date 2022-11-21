import Axios from 'axios'

import { DOMAIN, TOKEN } from '../util/settings/config'

export class BaseService {

    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            data: model,
            headers: {
                'Authorization': 'Beaer ' + localStorage.getItem(TOKEN)
            }
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data: model,
            headers: {
                'Authorization': 'Beaer ' + localStorage.getItem(TOKEN)
            }
        })
    }

    get = (url, model) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'GET',
            data: model,
            headers: {
                'Authorization': 'Beaer ' + localStorage.getItem(TOKEN)
            }
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            headers: {
                'Authorization': 'Beaer ' + localStorage.getItem(TOKEN)
            }
        })
    }
}