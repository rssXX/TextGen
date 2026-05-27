import { generateRouteV1, generationsRouteV1, statsRouteV1 } from '../routing/v1'

const ROUTES = {
    'v1': [
        { handler: generateRouteV1 },
        { handler: generationsRouteV1 },
        { handler: statsRouteV1 },
    ],
}

export default ROUTES
