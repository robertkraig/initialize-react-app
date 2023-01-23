import Layout from "./Layout";
import {Home} from "./components/Home";
import {YouClickedMeNew} from "./components/YouClickedMeNew";
import {YouClickedMeOld} from "./components/YouClickedMeOld";
import {YouClickedMeContainer} from "./components/YouClickedMeContainer";
import {YouClickedMeContext} from "./components/YouClickedMeUseContext";
import {YouClickedMeRedux} from "./components/YouClickedMeRedux";

export const RouteNames = {
    YouClickedMeNew:'you-clicked-me-new',
    YouClickedMeOld:'you-clicked-me-old',
    YouClickedMeContainer:'you-clicked-me-pure',
    YouClickedMeContext:'you-clicked-me-context',
    YouClickedMeRedux:'you-clicked-me-redux',
}

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                element: <YouClickedMeNew />,
                path: RouteNames.YouClickedMeNew,
            },
            {
                element: <YouClickedMeOld />,
                path: RouteNames.YouClickedMeOld,
            },
            {
                element: <YouClickedMeContainer />,
                path: RouteNames.YouClickedMeContainer,
            },
            {
                element: <YouClickedMeContext />,
                path: RouteNames.YouClickedMeContext,
            },
            {
                element: <YouClickedMeRedux />,
                path: RouteNames.YouClickedMeRedux,
            },
        ]
    }
];
