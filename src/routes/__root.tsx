import {Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtoolsPanel} from '@tanstack/react-router-devtools'
import {TanStackDevtools} from '@tanstack/react-devtools'
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar";
import ContentsLayout from "@/components/contents-layout";

export const Route = createRootRoute({
    component: () => (
        <div style={{display: 'flex', height: '100vh', width: '100%'}}>
            <Sidebar/>
            <ContentsLayout>
                <Outlet/>
            </ContentsLayout>
            <TanStackDevtools
                config={{
                    position: 'bottom-right',
                }}
                plugins={[
                    {
                        name: 'Tanstack Router',
                        render: <TanStackRouterDevtoolsPanel/>,
                    },
                ]}
            />
        </div>
    ),
})
