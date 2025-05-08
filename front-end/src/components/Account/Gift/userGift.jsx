import { Dog } from "@/assets/AuxImages";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@mantine/core";

export default function UserGift() {
    return (
        <Tabs className="col-12" color="lime" defaultValue="sent" >

            <TabsList grow >
                <TabsTab value="sent" >
                    <span className="fs-5 my-2">Sent</span>
                </TabsTab>
                <TabsTab value="received" >
                    <span className="fs-5 my-2">Received</span>
                </TabsTab>
            </TabsList>

            <TabsPanel value="sent" >
                <div className="d-flex flex-column justify-content-center align-items-center py-5">
                    <img className="col-4" src={Dog.src} alt="Check your internet connection" />
                    <h5 className="fw-semibold">No e-gift cards to show here!</h5>
                </div>
            </TabsPanel>
            <TabsPanel value="received" >
                <div className="d-flex flex-column justify-content-center align-items-center py-5">
                    <img className="col-4" src={Dog.src} alt="Check your internet connection" />
                    <h5 className="fw-semibold">No e-gift cards to show here!</h5>
                </div>
            </TabsPanel>

        </Tabs>
    );
}